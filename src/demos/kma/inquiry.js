export function buildInquiryEmail(inquiry) {
  const lines = [
    'Request: ' + inquiry.requestType,
    'Service: ' + inquiry.service,
    'Name: ' + inquiry.name,
    'Email: ' + inquiry.email,
    'Phone: ' + (inquiry.phone || 'Not provided'),
    'City: ' + inquiry.city,
    ...(inquiry.organization ? ['Organization: ' + inquiry.organization] : []),
    ...(inquiry.bidDue ? ['Requested bid date: ' + inquiry.bidDue] : []),
    '',
    inquiry.message,
  ];
  return 'mailto:info@kmahvacandconstruction.com?subject=' +
    encodeURIComponent(inquiry.requestType + ' — ' + inquiry.service) +
    '&body=' + encodeURIComponent(lines.join('\n'));
}

// Require an explicit receipt so a static-host HTML fallback cannot appear successful.
export async function deliverInquiry(endpoint, inquiry, fetchImpl = fetch) {
  if (!endpoint || !(endpoint.startsWith('/') && !endpoint.startsWith('//')) && !endpoint.startsWith('https://')) {
    throw new Error('Online delivery is not configured. Please use email or call KMA.');
  }
  const response = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'omit',
    body: JSON.stringify(inquiry),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error('Your request could not be sent. Please try again, email, or call KMA.');
  const receipt = await response.json().catch(() => null);
  if (receipt?.accepted !== true) throw new Error('Delivery was not confirmed. Please email or call KMA.');
  return receipt;
}
