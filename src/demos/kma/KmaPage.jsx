import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Menu, Phone, X } from 'lucide-react';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import KmaInquiryForm from './KmaInquiryForm';
import './kma.css';

const PHONE = 'tel:+19514860337';
const ROOT = 'https://kmahvacandconstruction.com';
const PROJECT_IMAGE = ROOT + '/wp-content/uploads/2022/07/HVAC-Moreno-Valley-and-Riverside-CA-KMA-HVAC-and-Construction-Portfolio-Fallbrook-High-School.webp';
const SECOND_IMAGE = ROOT + '/wp-content/uploads/2022/07/HVAC-Moreno-Valley-and-Riverside-CA-KMA-HVAC-and-Construction-Portfolio-San-Jacinto-Unified-School-District.webp';
const services = [
  { number: '01', title: 'Air Conditioning', text: 'Diagnosis, repair, installation, and maintenance for central AC, rooftop units, split systems, and heat pumps.', tags: 'Cooling / Duct design / Thermostats' },
  { number: '02', title: 'Heating', text: 'Heating repairs, replacement systems, furnaces, ductless systems, and maintenance for homes and facilities.', tags: 'Furnaces / Heat pumps / Zoned systems' },
  { number: '03', title: 'Commercial Tenant Space Renovation & Turnover', text: 'Prepare commercial spaces for their next chapter with tenant renovations and turnover work.', tags: 'Tenant improvements / Commercial spaces' },
  { number: '04', title: 'Construction Wiring', text: 'Electrical wiring for construction projects, HVAC equipment, and property improvements.', tags: 'Electrical / Equipment connections' },
  { number: '05', title: 'Home Additions', text: 'General construction for additional space, with heating, cooling, and electrical expertise on the same team.', tags: 'General building / Residential construction' },
  { number: '06', title: 'Whole Home Air Purification', text: 'Explore air purification and indoor air quality solutions for the air moving through your home.', tags: 'Air purification / Ventilation / Indoor air quality' },
];
const projects = [
  { name: 'Fallbrook Union High School District', category: 'Public education', image: PROJECT_IMAGE, alt: 'Fallbrook High School project photograph from KMA’s portfolio', detail: 'Rooftop HVAC replacement, heat-pump installation, wiring, and controls.' },
  { name: 'San Jacinto Unified School District', category: 'Public education', image: SECOND_IMAGE, alt: 'San Jacinto school district project photograph from KMA’s portfolio', detail: 'Two Carrier VRF systems, four fan coils, new electrical service, and controls.' },
];
const SOCIALS = [
  { name: 'Facebook', icon: faFacebookF, href: 'https://www.facebook.com/kmahvac/' },
  { name: 'Instagram', icon: faInstagram, href: 'https://www.instagram.com/kmahvac/' },
  { name: 'Twitter / X', icon: faXTwitter, href: 'https://twitter.com/kmahvac' },
];
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d211911.0509038928!2d-117.182468!3d33.912564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc919b17212c1e120!2sKMA%20HVAC%20and%20Construction!5e0!3m2!1sen!2sus!4v1657568299180!5m2!1sen!2sus';
const SPACES = [
  { label: 'Your home', title: 'More comfort. Less guesswork.', text: 'Heating, cooling, and indoor air quality for the place you come home to.', href: '#kma-services' },
  { label: 'Your business', title: 'Keep your space working.', text: 'Commercial systems, tenant improvements, and electrical expertise for your next move.', href: '#kma-services' },
  { label: 'Your community', title: 'Built for a bigger responsibility.', text: 'HVAC replacements and installations for schools, public facilities, and civic spaces.', href: '#kma-work' },
];

function handleTabKey(event, current, count, select) {
  let next;
  if (event.key === 'ArrowRight') next = (current + 1) % count;
  else if (event.key === 'ArrowLeft') next = (current - 1 + count) % count;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = count - 1;
  else return;
  event.preventDefault();
  select(next);
  event.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();
}

function SocialIcon({ icon }) {
  const [width, height, , , path] = icon.icon;
  return <svg viewBox={`0 0 ${width} ${height}`} width="19" height="19" fill="currentColor" aria-hidden="true" focusable="false">{(Array.isArray(path) ? path : [path]).map((part, index) => <path key={index} d={part} />)}</svg>;
}

function AirflowDrawing() {
  return (
    <svg className="kma-airflow" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <g className="kma-drawing-grid" stroke="currentColor" strokeWidth="0.5">
        <path d="M100 0V600M200 0V600M300 0V600M400 0V600M500 0V600M0 100H600M0 200H600M0 300H600M0 400H600M0 500H600" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="195" y="195" width="210" height="210" rx="12" />
        <rect x="210" y="210" width="180" height="180" rx="8" />
        <circle cx="300" cy="300" r="65" /><circle cx="300" cy="300" r="11" />
        <path d="M250 180V130H80M350 180V85H520M250 420V500H80M350 420V545H520" />
      </g>
      <g className="kma-fan" stroke="currentColor" strokeWidth="1.5">
        <path d="M300 287C270 240 240 255 250 280C255 293 275 295 287 300M313 300C360 270 345 240 320 250C307 255 305 275 300 287M300 313C330 360 360 345 350 320C345 307 325 305 313 300M287 300C240 330 255 360 280 350C293 345 295 325 300 313" />
      </g>
      <g className="kma-air-trails" stroke="currentColor" strokeWidth="3" pathLength="100">
        <path d="M80 130H250V180M520 85H350V180M250 420V500H80M350 420V545H520" />
      </g>
      <g fill="currentColor"><circle cx="80" cy="130" r="5" /><circle cx="520" cy="85" r="5" /><circle cx="80" cy="500" r="5" /><circle cx="520" cy="545" r="5" /></g>
    </svg>
  );
}

const nav = [['Services', '#kma-services'], ['Our work', '#kma-work'], ['About KMA', '#kma-about'], ['Contact', '#kma-inquiry']];

export default function KmaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpace, setActiveSpace] = useState(0);
  const [requestType, setRequestType] = useState('Residential Repair');
  const [selectedService, setSelectedService] = useState('');
  const [activeProject, setActiveProject] = useState(0);
  const [motionPaused, setMotionPaused] = useState(false);
  const rootRef = useRef(null);
  const selectedSpace = SPACES[activeSpace];
  const project = projects[activeProject];
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    root.querySelectorAll('.kma-reveal').forEach((element) => observer.observe(element));
    root.classList.add('kma-motion-ready');
    return () => {
      observer.disconnect();
      root.classList.remove('kma-motion-ready');
    };
  }, []);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'KMA HVAC & Construction | Moreno Valley & Riverside';
    return () => { document.title = previousTitle; };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);
  return (
    <div ref={rootRef} className={'kma kma-v2' + (motionPaused ? ' kma-motion-paused' : '')}>
      <a className="kma-skip" href="#kma-main">Skip to content</a>
      <div className="kma-topline">
        <div className="kma-wrap"><span>Moreno Valley & Riverside, CA</span><span>Se habla español <i /> Mon–Fri, 8am–8pm</span></div>
      </div>
      <header className="kma-header">
        <div className="kma-wrap kma-header-inner">
          <a className="kma-wordmark" href="#kma-main" aria-label="KMA HVAC and Construction home"><strong>KMA</strong><span>HVAC &<br />CONSTRUCTION</span></a>
          <nav className="kma-desktop-nav" aria-label="KMA main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <a className="kma-header-call" href={PHONE}><Phone size={16} aria-hidden="true" /><span>(951) 486-0337</span></a>
          <button className="kma-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="kma-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav id="kma-mobile-nav" className="kma-mobile-nav" hidden={!menuOpen} aria-label="KMA mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={18} /></a>)}</nav>
      </header>
      <main id="kma-main">
        <section className="kma-hero kma-hero-cinematic">
          <div className="kma-hero-backdrop"><img src={PROJECT_IMAGE} alt="Fallbrook High School, featured in KMA’s project portfolio" fetchPriority="high" /><div /></div>
          <div className="kma-wrap kma-hero-stage">
            <div className="kma-hero-meta"><span>MORENO VALLEY, CALIFORNIA</span><span>HVAC / ELECTRICAL / CONSTRUCTION</span></div>
            <div className="kma-hero-heading">
              <p className="kma-eyebrow">YOUR SPACE. OUR CRAFT.</p>
              <h1>Good work.<br /><span>You can <em>feel.</em></span></h1>
              <p className="kma-hero-intro">The comfort of home. The demands of a business. The scale of a community. We build for all three.</p>
              <div className="kma-actions"><a className="kma-button" href="#kma-inquiry">Request Service / Bid <ArrowUpRight size={20} aria-hidden="true" /></a><a className="kma-text-link" href={PHONE}><Phone size={16} aria-hidden="true" /> Call (951) 486-0337</a></div>
              <p className="kma-hero-quote"><Check size={14} aria-hidden="true" /> Free written quotes on new AC installations</p>
            </div>
            <div className="kma-technical-art"><AirflowDrawing /><span>SYSTEM THINKING.<br />HANDS-ON EXPERTISE.</span></div>
            <div className="kma-hero-foot"><span>FAMILY OPERATED. LOCALLY ROOTED.</span><a href="#kma-spaces">Find your space <ArrowDown size={15} /></a><button type="button" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused}>{motionPaused ? 'Resume motion' : 'Pause motion'}</button></div>
          </div>
        </section>
        <section id="kma-spaces" className="kma-space-section">
          <div className="kma-wrap kma-space-layout">
            <div className="kma-space-controls"><p className="kma-eyebrow">A DIFFERENT NEED. THE SAME COMMITMENT.</p><div role="tablist" aria-label="Explore KMA by property type" onKeyDown={(event) => handleTabKey(event, activeSpace, SPACES.length, setActiveSpace)}>{SPACES.map((space, index) => <button type="button" key={space.label} id={'kma-space-tab-' + index} role="tab" tabIndex={activeSpace === index ? 0 : -1} aria-selected={activeSpace === index} aria-controls="kma-space-panel" onClick={() => setActiveSpace(index)}>{space.label}<ArrowUpRight size={18} aria-hidden="true" /></button>)}</div></div>
            <div id="kma-space-panel" role="tabpanel" aria-labelledby={'kma-space-tab-' + activeSpace} className="kma-space-panel" tabIndex={0}><div key={activeSpace} className="kma-panel-enter"><h2>{selectedSpace.title}</h2><p>{selectedSpace.text}</p><a className="kma-text-link" href={selectedSpace.href}>Explore what we do <ArrowUpRight size={17} /></a></div></div>
          </div>
        </section>
        <div className="kma-credentials"><div className="kma-wrap"><span><Check size={17} /> Licensed, bonded & insured</span><span>CA contractor #1023799</span><span>B · C10 · C20</span><span>Residential · Commercial · Public works</span></div></div>
        <section id="kma-services" className="kma-section kma-services">
          <div className="kma-wrap">
            <div className="kma-section-top"><p className="kma-eyebrow">THE CRAFT</p><p className="kma-small-note">One team. A range of expertise.</p></div>
            <div className="kma-section-heading kma-reveal"><h2>The right people.<br />For the whole project.</h2><p>A repair at home. An upgrade at work. A new system for a public building. Tell us what you need—we’ll help you find the way forward.</p></div>
            <div className="kma-service-list">{services.map((service) => <article key={service.number} className="kma-service-row kma-reveal"><span className="kma-service-number">{service.number}</span><h3>{service.title}</h3><div><p>{service.text}</p><small>{service.tags}</small></div><a href="#kma-inquiry" onClick={() => setSelectedService(service.title)} aria-label={'Discuss ' + service.title}><ArrowUpRight size={25} /></a></article>)}</div>
          </div>
        </section>
        <section id="kma-work" className="kma-section kma-work">
          <div className="kma-wrap">
            <div className="kma-section-top"><p className="kma-eyebrow">IN THE FIELD</p><a className="kma-text-link" href={ROOT + '/portfolio/'} target="_blank" rel="noreferrer">Full KMA portfolio <ArrowUpRight size={17} /></a></div>
            <div className="kma-section-heading kma-reveal"><h2>Big responsibility.<br />Proven capability.</h2><p>Schools, civic facilities, and the spaces that bring people together. Take a closer look at KMA’s public works experience.</p></div>
            <div className="kma-project-viewer kma-reveal">
              <div className="kma-project-stage">
                <div key={project.name} className="kma-project-frame"><img src={project.image} alt={project.alt} loading="lazy" /><span className="kma-project-stamp">KMA / FIELD NOTES</span></div>
                <span className="kma-project-counter">0{activeProject + 1} <i /> 0{projects.length}</span>
              </div>
              <div className="kma-project-console">
                <div role="tablist" aria-label="Select a KMA project" onKeyDown={(event) => handleTabKey(event, activeProject, projects.length, setActiveProject)}>{projects.map((item, index) => <button type="button" role="tab" tabIndex={activeProject === index ? 0 : -1} key={item.name} id={'kma-project-tab-' + index} aria-controls="kma-project-panel" aria-selected={activeProject === index} onClick={() => setActiveProject(index)}><span>0{index + 1}</span>{item.name}<ArrowUpRight size={20} /></button>)}</div>
                <div id="kma-project-panel" role="tabpanel" aria-labelledby={'kma-project-tab-' + activeProject} tabIndex={0}><div key={project.name} className="kma-panel-enter"><p className="kma-eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.detail}</p><a className="kma-text-link" href={ROOT + '/portfolio/'} target="_blank" rel="noreferrer">View original project portfolio <ArrowUpRight size={16} /></a></div></div>
              </div>
            </div>
            <div className="kma-project-fact"><strong>62<span>package units replaced</span></strong><p>Temecula Valley Unified School District<br /><span>One example from KMA’s published project portfolio.</span></p><a href={ROOT + '/portfolio/'} target="_blank" rel="noreferrer" aria-label="Read the Temecula Valley project in KMA’s portfolio"><ArrowUpRight size={28} /></a></div>
          </div>
        </section>
        <section className="kma-recognition kma-section" aria-labelledby="kma-recognition-heading">
          <div className="kma-wrap kma-reveal">
            <div className="kma-section-top"><p className="kma-eyebrow">CREDENTIALS & RECOGNITION</p><a className="kma-text-link" href={ROOT} target="_blank" rel="noreferrer">As featured by KMA <ArrowUpRight size={16} /></a></div>
            <div className="kma-section-heading"><h2 id="kma-recognition-heading">The details<br />behind the work.</h2><p>California contractor #1023799. General Building, Electrical, and HVAC classifications, alongside the recognition featured on KMA’s website.</p></div>
            <div className="kma-badge-grid">
              <figure><div><img src={ROOT + '/wp-content/uploads/2026/01/bbb-trust-logo.webp'} alt="BBB Accredited Business badge published by KMA" loading="lazy" /></div><figcaption><strong>BBB accreditation</strong><span>Accredited Business badge</span></figcaption></figure>
              <figure className="kma-badge-wide"><div><img src={ROOT + '/wp-content/uploads/2022/07/Best-HVAC-Furnace-Repair-HomeAdvisor-Approved-Lead-Safe-EPA-Certified-in-Riverside-and-Moreno-Valley-CA.png'} alt="KMA recognition panel showing EPA Lead-Safe Certified Firm, HomeAdvisor Screened and Approved, Expertise.com 2021, and RCCD" loading="lazy" /></div><figcaption><strong>EPA Lead-Safe & HomeAdvisor</strong><span>Also featuring Expertise.com’s 2021 recognition</span></figcaption></figure>
              <figure><div><img src={ROOT + '/wp-content/uploads/2023/09/Award.jpg'} alt="KMA Best of Moreno Valley HVAC Contractor award, 2023" loading="lazy" /></div><figcaption><strong>Best of Moreno Valley · 2023</strong><span>HVAC Contractor recognition</span></figcaption></figure>
            </div>
          </div>
        </section>
        <section id="kma-about" className="kma-section kma-about">
          <div className="kma-wrap kma-about-grid kma-reveal"><div><p className="kma-eyebrow">THE PEOPLE BEHIND THE WORK</p><h2>Technical know-how.<br /><em>A personal approach.</em></h2></div><div className="kma-about-copy"><p className="kma-lead">Family operated in Moreno Valley. Working with homeowners, businesses, and public facilities.</p><p>KMA brings heating, cooling, electrical, and general building expertise together. Whether it’s a single system or a larger facility project, it starts with a conversation about what your space needs.</p><ul><li><Check size={18} /> General Building — Class B</li><li><Check size={18} /> Electrical — Class C10</li><li><Check size={18} /> HVAC — Class C20</li></ul><a className="kma-text-link" href="#kma-inquiry">Meet your next project partner <ArrowUpRight size={17} /></a></div></div>
        </section>
        <section id="kma-inquiry" className="kma-section kma-contact">
          <div className="kma-wrap kma-inquiry-layout">
            <div className="kma-inquiry-intro kma-reveal"><p className="kma-eyebrow">A REPAIR. A REPLACEMENT. A PROJECT BID.</p><h2>Let’s get<br /><em>specific.</em></h2><p>Homeowners can request repairs or seasonal maintenance. Businesses and public agencies can share project requirements and bid dates.</p><a className="kma-phone" href={PHONE}>(951) 486-0337 <ArrowUpRight aria-hidden="true" /></a><a className="kma-email" href="mailto:info@kmahvacandconstruction.com">info@kmahvacandconstruction.com</a><dl className="kma-inquiry-hours"><div><dt>Office</dt><dd>Monday–Friday · 8am–8pm</dd></div><div><dt>Mobile</dt><dd><a href="tel:+19518304137">(951) 830-4137</a></dd></div><div><dt>Location</dt><dd>Moreno Valley, CA 92555</dd></div></dl><p className="kma-inquiry-help">For urgent service, please call. This form does not reserve an appointment.</p></div>
            <KmaInquiryForm requestType={requestType} setRequestType={setRequestType} selectedService={selectedService} setSelectedService={setSelectedService} services={services} />
          </div>
        </section>
        <section className="kma-local kma-section" aria-labelledby="kma-local-heading">
          <div className="kma-wrap kma-local-grid kma-reveal">
            <div className="kma-local-copy"><p className="kma-eyebrow">RIGHT HERE IN YOUR COMMUNITY</p><h2 id="kma-local-heading">Local roots.<br /><em>Real connections.</em></h2><p>Based in Moreno Valley, serving Moreno Valley and Riverside. Find KMA on the map, or follow along with the team online.</p><a className="kma-text-link" href="https://maps.google.com/maps?ll=33.912557,-117.182458&z=10&t=m&hl=en&gl=US&mapclient=embed&cid=14490808379540365600" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17} /></a><nav className="kma-social-links" aria-label="KMA social media">{SOCIALS.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer"><span><SocialIcon icon={social.icon} />{social.name}</span><ArrowUpRight size={16} aria-hidden="true" /></a>)}</nav></div>
            <div className="kma-map"><iframe title="KMA HVAC & Construction location on Google Maps" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><span>MORENO VALLEY / RIVERSIDE, CA</span></div>
          </div>
        </section>
      </main>
      <footer className="kma-footer"><div className="kma-wrap"><div className="kma-footer-top"><a className="kma-wordmark" href="#kma-main"><strong>KMA</strong><span>HVAC &<br />CONSTRUCTION</span></a><p>Comfort for your space.<br />Capability for your next project.</p><a href={PHONE}>Call KMA <ArrowUpRight size={18} /></a></div><div className="kma-footer-bottom"><span>© {new Date().getFullYear()} KMA HVAC & Construction Inc.</span><span>CA #1023799 · B / C10 / C20</span><span>Independent redesign concept</span></div></div></footer>
    </div>
  );
}
