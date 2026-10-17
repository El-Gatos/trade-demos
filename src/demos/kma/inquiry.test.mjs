import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInquiryEmail, deliverInquiry } from './inquiry.js';

const inquiry = { requestType: 'Commercial / Public Works RFP', service: 'Air Conditioning', name: 'Demo Reviewer', email: 'demo@example.com', phone: '', city: 'Moreno Valley', organization: 'Demo Agency', bidDue: '2026-12-01', message: 'Replace rooftop units & controls.\nInclude electrical scope.' };

test('email draft preserves scope, punctuation, organization, and bid date', () => {
  const draft = new URL(buildInquiryEmail(inquiry));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'info@kmahvacandconstruction.com');
  assert.ok(draft.searchParams.get('body').includes(inquiry.message));
  assert.ok(draft.searchParams.get('body').includes(inquiry.organization));
  assert.ok(draft.searchParams.get('body').includes(inquiry.bidDue));
});

test('missing or unsafe delivery endpoint makes no network request', async () => {
  let calls = 0;
  for (const endpoint of ['', '//elsewhere.test', 'http://elsewhere.test']) {
    await assert.rejects(deliverInquiry(endpoint, inquiry, async () => { calls++; }), /not configured/);
  }
  assert.equal(calls, 0);
});

test('static hosting HTML fallback cannot produce a successful receipt', async () => {
  await assert.rejects(deliverInquiry('/api/inquiries', inquiry, async () => ({
    ok: true, json: async () => { throw new SyntaxError('HTML response'); },
  })), /not confirmed/);
});

test('non-success response and unacknowledged JSON cannot produce success', async () => {
  await assert.rejects(deliverInquiry('/api/inquiries', inquiry, async () => ({ ok: false })), /could not be sent/);
  await assert.rejects(deliverInquiry('/api/inquiries', inquiry, async () => ({ ok: true, json: async () => ({}) })), /not confirmed/);
});

test('delivery sends inquiry with no cookies and requires an explicit acceptance', async () => {
  const receipt = await deliverInquiry('/api/inquiries', inquiry, async (url, options) => {
    assert.equal(url, '/api/inquiries');
    assert.equal(options.method, 'POST');
    assert.equal(options.credentials, 'omit');
    assert.deepEqual(JSON.parse(options.body), inquiry);
    return { ok: true, json: async () => ({ accepted: true }) };
  });
  assert.equal(receipt.accepted, true);
});

test('network failure propagates without claiming receipt', async () => {
  await assert.rejects(deliverInquiry('/api/inquiries', inquiry, async () => { throw new TypeError('Network failed'); }), /Network failed/);
});
