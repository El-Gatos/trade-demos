import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Menu, Phone, X } from 'lucide-react';
import './kma.css';

const PHONE = 'tel:+19514860337';
const ROOT = 'https://kmahvacandconstruction.com';
const PROJECT_IMAGE = ROOT + '/wp-content/uploads/2022/07/HVAC-Moreno-Valley-and-Riverside-CA-KMA-HVAC-and-Construction-Portfolio-Fallbrook-High-School.webp';
const SECOND_IMAGE = ROOT + '/wp-content/uploads/2022/07/HVAC-Moreno-Valley-and-Riverside-CA-KMA-HVAC-and-Construction-Portfolio-San-Jacinto-Unified-School-District.webp';
const services = [
  { number: '01', title: 'Commercial & public works', text: 'HVAC installation, equipment replacement, and system upgrades for schools, municipal buildings, and commercial facilities.', tags: 'Rooftop units / Split systems / Controls' },
  { number: '02', title: 'Heating & cooling', text: 'Keep your home comfortable with air conditioning and heating repairs, new installations, and custom system design.', tags: 'Air conditioning / Heating / Heat pumps' },
  { number: '03', title: 'Preventive maintenance', text: 'Give your equipment the attention it needs with inspections, cleaning, and ongoing heating and cooling maintenance.', tags: 'Inspections / Cleaning / Indoor air quality' },
  { number: '04', title: 'Construction & electrical', text: 'Bring the next phase of your property to life with construction wiring, home additions, and commercial tenant renovations.', tags: 'Electrical / Additions / Tenant improvements' },
];
const projects = [
  { name: 'Fallbrook Union High School District', category: 'Public education', image: PROJECT_IMAGE, alt: 'HVAC equipment pictured in KMA’s Fallbrook High School project portfolio', detail: 'Rooftop HVAC replacement, heat-pump installation, wiring, and controls.' },
  { name: 'San Jacinto Unified School District', category: 'Public education', image: SECOND_IMAGE, alt: 'HVAC installation pictured in KMA’s San Jacinto school district portfolio', detail: 'Two Carrier VRF systems, four fan coils, new electrical service, and controls.' },
];
const nav = [['Services', '#kma-services'], ['Our work', '#kma-work'], ['About KMA', '#kma-about'], ['Contact', '#kma-contact']];

export default function KmaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="kma">
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
        <section className="kma-hero">
          <div className="kma-wrap kma-hero-grid">
            <div className="kma-hero-copy">
              <p className="kma-eyebrow"><span /> BUILT FOR THE EVERYDAY. READY FOR THE COMPLEX.</p>
              <h1>Comfort.<br />Built to <em>last.</em></h1>
              <p className="kma-hero-intro">From your family home to the facilities your community depends on. HVAC, construction, and electrical expertise, under one roof.</p>
              <div className="kma-actions"><a className="kma-button" href="#kma-contact">Let’s talk about your project <ArrowUpRight size={20} aria-hidden="true" /></a><a className="kma-text-link" href="#kma-work">Explore our work <ArrowDown size={16} aria-hidden="true" /></a></div>
              <div className="kma-hero-bottom"><span>FAMILY OPERATED.<br /><b>LOCALLY ROOTED.</b></span><span>HVAC · ELECTRICAL<br /><b>GENERAL CONSTRUCTION</b></span></div>
            </div>
            <div className="kma-hero-visual">
              <img src={PROJECT_IMAGE} alt="A rooftop HVAC installation from KMA’s Fallbrook High School portfolio" fetchPriority="high" />
              <div className="kma-photo-shade" />
              <span className="kma-photo-index">KMA / IN THE FIELD</span>
              <div className="kma-photo-caption"><span>REAL PROJECTS. REAL CAPABILITY.</span><p>Keeping our<br />communities running.</p><a href="#kma-work" aria-label="Explore KMA project work"><ArrowUpRight size={25} /></a></div>
            </div>
          </div>
        </section>
        <div className="kma-credentials"><div className="kma-wrap"><span><Check size={17} /> Licensed, bonded & insured</span><span>CA contractor #1023799</span><span>B · C10 · C20</span><span>Residential · Commercial · Public works</span></div></div>
        <section id="kma-services" className="kma-section kma-services">
          <div className="kma-wrap">
            <div className="kma-section-top"><p className="kma-eyebrow">01 / WHAT WE DO</p><p className="kma-small-note">One team. A range of expertise.</p></div>
            <div className="kma-section-heading"><h2>The right people.<br />For the whole project.</h2><p>A repair at home. An upgrade at work. A new system for a public building. Tell us what you need—we’ll help you find the way forward.</p></div>
            <div className="kma-service-list">{services.map((service) => <article key={service.number} className="kma-service-row"><span className="kma-service-number">{service.number}</span><h3>{service.title}</h3><div><p>{service.text}</p><small>{service.tags}</small></div><a href="#kma-contact" aria-label={'Discuss ' + service.title}><ArrowUpRight size={25} /></a></article>)}</div>
          </div>
        </section>
        <section id="kma-work" className="kma-section kma-work">
          <div className="kma-wrap">
            <div className="kma-section-top"><p className="kma-eyebrow">02 / WORK THAT SPEAKS FOR ITSELF</p><a className="kma-text-link" href={ROOT + '/portfolio/'} target="_blank" rel="noreferrer">Full KMA portfolio <ArrowUpRight size={17} /></a></div>
            <div className="kma-section-heading"><h2>Big responsibility.<br />Proven capability.</h2><p>Schools, civic facilities, and the spaces that bring people together. Take a closer look at KMA’s public works experience.</p></div>
            <div className="kma-projects">{projects.map((project) => <article className="kma-project" key={project.name}><div className="kma-project-image"><img src={project.image} alt={project.alt} loading="lazy" /><span>{project.category}</span></div><h3>{project.name}</h3><p>{project.detail}</p></article>)}</div>
            <div className="kma-project-fact"><strong>62<span>package units replaced</span></strong><p>Temecula Valley Unified School District<br /><span>One example from KMA’s published project portfolio.</span></p><a href={ROOT + '/portfolio/'} target="_blank" rel="noreferrer" aria-label="Read the Temecula Valley project in KMA’s portfolio"><ArrowUpRight size={28} /></a></div>
          </div>
        </section>
        <section id="kma-about" className="kma-section kma-about">
          <div className="kma-wrap kma-about-grid"><div><p className="kma-eyebrow">03 / YOUR LOCAL TEAM</p><h2>Technical know-how.<br /><em>A personal approach.</em></h2></div><div className="kma-about-copy"><p className="kma-lead">Family operated in Moreno Valley. Working with homeowners, businesses, and public facilities.</p><p>KMA brings heating, cooling, electrical, and general building expertise together. Whether it’s a single system or a larger facility project, it starts with a conversation about what your space needs.</p><ul><li><Check size={18} /> General Building — Class B</li><li><Check size={18} /> Electrical — Class C10</li><li><Check size={18} /> HVAC — Class C20</li></ul><a className="kma-text-link" href="#kma-contact">Meet your next project partner <ArrowUpRight size={17} /></a></div></div>
        </section>
        <section id="kma-contact" className="kma-section kma-contact">
          <div className="kma-wrap kma-contact-grid"><div><p className="kma-eyebrow">04 / LET’S GET TO WORK</p><h2>What can we<br />build for <em>you?</em></h2><p>Tell us about your system, your space, or your next project. Start with a call or send the team a message.</p><a className="kma-phone" href={PHONE}>(951) 486-0337 <ArrowUpRight aria-hidden="true" /></a><a className="kma-email" href="mailto:info@kmahvacandconstruction.com">info@kmahvacandconstruction.com</a></div><div className="kma-contact-card"><span className="kma-contact-label">REACH THE KMA TEAM</span><h3>A local team.<br />A direct conversation.</h3><dl><div><dt>Office hours</dt><dd>Monday–Friday<br />8:00am–8:00pm</dd></div><div><dt>Based in</dt><dd>Moreno Valley, CA 92555<br />Serving Moreno Valley & Riverside</dd></div><div><dt>Mobile</dt><dd><a href="tel:+19518304137">(951) 830-4137</a></dd></div></dl><a className="kma-button" href={ROOT + '/contact/'} target="_blank" rel="noreferrer">Open KMA’s contact form <ArrowUpRight size={20} /></a><p className="kma-contact-note">Prefer to write? Use the form on KMA’s current website.</p></div></div>
        </section>
      </main>
      <footer className="kma-footer"><div className="kma-wrap"><div className="kma-footer-top"><a className="kma-wordmark" href="#kma-main"><strong>KMA</strong><span>HVAC &<br />CONSTRUCTION</span></a><p>Comfort for your space.<br />Capability for your next project.</p><a href={PHONE}>Call KMA <ArrowUpRight size={18} /></a></div><div className="kma-footer-bottom"><span>© {new Date().getFullYear()} KMA HVAC & Construction Inc.</span><span>CA #1023799 · B / C10 / C20</span><span>Independent redesign concept</span></div></div></footer>
    </div>
  );
}
