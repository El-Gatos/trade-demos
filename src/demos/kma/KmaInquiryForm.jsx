import { useRef, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { buildInquiryEmail, deliverInquiry } from './inquiry';

const REQUEST_TYPES = ['Residential Repair', 'Seasonal Tune-up / Maintenance', 'System Replacement / Installation', 'Commercial / Public Works RFP', 'Construction / Electrical'];
const ENDPOINT = import.meta.env.VITE_KMA_INQUIRY_ENDPOINT || '';

export default function KmaInquiryForm({ requestType, setRequestType, selectedService, setSelectedService, services }) {
  const [details, setDetails] = useState({ name: '', email: '', phone: '', city: '', organization: '', bidDue: '', message: '' });
  const [stage, setStage] = useState('editing');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const reviewRef = useRef(null);
  const sendingRef = useRef(false);
  const isCommercial = requestType === 'Commercial / Public Works RFP';
  const inquiry = {
    requestType,
    service: selectedService,
    name: details.name.trim(),
    email: details.email.trim(),
    phone: details.phone.trim(),
    city: details.city.trim(),
    message: details.message.trim(),
    ...(isCommercial ? { organization: details.organization.trim(), bidDue: details.bidDue } : {}),
  };

  function update(event) {
    const { name, value } = event.target;
    setDetails((previous) => ({ ...previous, [name]: value }));
    setError('');
  }

  function review(event) {
    event.preventDefault();
    if (!inquiry.name || !inquiry.city || !inquiry.message || (isCommercial && !inquiry.organization)) {
      setError('Please fill in each required field with your request details.');
      return;
    }
    setStage('review');
    setError('');
    requestAnimationFrame(() => reviewRef.current?.focus());
  }

  async function send() {
    if (sendingRef.current) return;
    sendingRef.current = true;
    setStage('sending');
    setError('');
    try {
      await deliverInquiry(ENDPOINT, inquiry);
      setStage('sent');
      requestAnimationFrame(() => reviewRef.current?.focus());
    } catch (failure) {
      setStage('review');
      setError(failure.name === 'TimeoutError' ? 'Sending took too long. Please try again, email, or call KMA.' : failure.message || 'Unable to send. Please email or call KMA.');
    } finally {
      sendingRef.current = false;
    }
  }

  async function copyDetails() {
    try {
      const email = new URL(buildInquiryEmail(inquiry));
      await navigator.clipboard.writeText(email.searchParams.get('body'));
      setCopied(true);
    } catch {
      setError('Copy is unavailable. You can select the request text below or open an email draft.');
    }
  }

  return (
    <div className="kma-inquiry-form">
      <div className="kma-inquiry-form-head"><span className="kma-contact-label">SERVICE REQUEST / PROJECT BID</span><h3>Start with what you need.</h3><p>{ENDPOINT ? 'Choose a request type. We’ll keep the next steps simple.' : 'Fill in your details, review them here, then send with your email app.'}</p></div>
      <form onSubmit={review} aria-label="KMA service or bid inquiry">
        <fieldset disabled={stage === 'sending' || stage === 'sent'}>
          <div className="kma-form-grid">
            <label className="kma-form-wide">Request type
              <select value={requestType} onChange={(event) => { setRequestType(event.target.value); setStage('editing'); setError(''); }} required>{REQUEST_TYPES.map((type) => <option key={type}>{type}</option>)}</select>
            </label>
            <label className="kma-form-wide">Service
              <select value={selectedService} onChange={(event) => { setSelectedService(event.target.value); setStage('editing'); setError(''); }} required><option value="">Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select>
            </label>
            {stage === 'editing' && <>
              <label>Your name<input name="name" autoComplete="name" value={details.name} onChange={update} required minLength={2} maxLength={100} /></label>
              <label>Email<input name="email" type="email" autoComplete="email" value={details.email} onChange={update} required maxLength={150} /></label>
              <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" value={details.phone} onChange={update} maxLength={30} /></label>
              <label>City<input name="city" autoComplete="address-level2" value={details.city} onChange={update} required maxLength={100} /></label>
              {isCommercial && <>
                <label>Organization / agency<input name="organization" autoComplete="organization" value={details.organization} onChange={update} required maxLength={150} /></label>
                <label>Bid due date <span>(optional)</span><input name="bidDue" type="date" value={details.bidDue} onInput={update} onChange={update} /></label>
              </>}
              <label className="kma-form-wide">{isCommercial ? 'Project scope / RFP details' : 'How can we help?'}<textarea name="message" rows={4} value={details.message} onChange={update} required minLength={10} maxLength={3000} placeholder={isCommercial ? 'System scope, site needs, and any bid requirements.' : 'Tell us about your system or the service you need.'} /></label>
            </>}
          </div>
          {stage === 'editing' && <button type="submit" className="kma-button">Review request <ArrowUpRight size={18} /></button>}
        </fieldset>
      </form>
      {stage !== 'editing' && <div className="kma-inquiry-review" ref={reviewRef} tabIndex={-1}>
        <h4>{stage === 'sent' ? <><Check size={20} /> Request received</> : 'Review your request'}</h4>
        {stage === 'sent' ? <p>KMA has received your inquiry. This does not confirm an appointment or bid acceptance.</p> : <>
          <dl><div><dt>Request</dt><dd>{inquiry.requestType}</dd></div><div><dt>Service</dt><dd>{inquiry.service}</dd></div><div><dt>Contact</dt><dd>{inquiry.name}<br />{inquiry.email}{inquiry.phone && <><br />{inquiry.phone}</>}</dd></div><div><dt>City</dt><dd>{inquiry.city}</dd></div>{isCommercial && <div><dt>Organization</dt><dd>{inquiry.organization}{inquiry.bidDue && <><br />Bid due: {inquiry.bidDue}</>}</dd></div>}</dl>
          <p className="kma-inquiry-message">{inquiry.message}</p>
          <div className="kma-form-actions">{ENDPOINT ? <button type="button" className="kma-button" disabled={stage === 'sending'} onClick={send}>{stage === 'sending' ? 'Sending…' : 'Send request'}<ArrowUpRight size={18} /></button> : <a className="kma-button" href={buildInquiryEmail(inquiry)}>Open email draft <ArrowUpRight size={18} /></a>}<button type="button" className="kma-form-edit" disabled={stage === 'sending'} onClick={() => { setStage('editing'); setCopied(false); }}>Edit details</button><button type="button" className="kma-form-edit" disabled={stage === 'sending'} onClick={copyDetails}>{copied ? 'Copied' : 'Copy request'}</button></div>
          {!ENDPOINT && <p className="kma-form-note">Nothing has been sent. This preview prepares an email to KMA; send it from your email app.</p>}
        </>}
      </div>}
      {error && <p className="kma-form-error" role="alert">{error}</p>}
      <p className="kma-form-note" aria-live="polite">{stage === 'sending' ? 'Sending your inquiry. Please wait.' : 'Need urgent assistance? Call (951) 486-0337. Appointments and bid availability are confirmed by the team.'}</p>
    </div>
  );
}
