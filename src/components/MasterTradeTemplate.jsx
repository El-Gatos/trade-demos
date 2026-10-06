import { Mail, MapPin, Menu, MessageSquare, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CLIENTS, DEFAULT_CLIENT } from '../data';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#story', label: 'About us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

// The one decorative element: a run of copper pipe with couplings at each end.
function PipeRun({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 22" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--metal), white 45%)' }} />
          <stop offset="0.45" style={{ stopColor: 'var(--metal)' }} />
          <stop offset="1" style={{ stopColor: 'color-mix(in srgb, var(--metal), black 40%)' }} />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="388" height="10" fill="url(#pipe)" />
      <rect x="0" y="2" width="14" height="18" rx="2" fill="url(#pipe)" />
      <rect x="386" y="2" width="14" height="18" rx="2" fill="url(#pipe)" />
      <rect x="0" y="2" width="14" height="18" rx="2" fill="#000" opacity="0.15" />
      <rect x="386" y="2" width="14" height="18" rx="2" fill="#000" opacity="0.15" />
    </svg>
  );
}

function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`font-display font-bold text-ink text-4xl sm:text-5xl leading-[1.05] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

function ServiceList({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="font-display font-semibold text-2xl text-ink pb-3 border-b-2 border-ink">{title}</h3>
      <dl>
        {items.map((s) => (
          <div key={s.title} className="py-4 border-b border-slate-200">
            <dt className="font-semibold text-ink text-lg">{s.title}</dt>
            <dd className="text-slate-600 mt-0.5 leading-relaxed">{s.desc}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function MasterTradeTemplate() {
  const { clientId } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const client = CLIENTS[clientId] || DEFAULT_CLIENT;
  const dial = client.phone.replace(/\D/g, '');
  const tel = `tel:${dial}`;
  const sms = `sms:${dial}`;
  const { hero, theme, services, story, reviews, offers, facts } = client;
  const areas = Array.isArray(client.serviceAreas) ? client.serviceAreas : [client.serviceAreas].filter(Boolean);
  const legal = (client.legalName || client.name).replace(/\.$/, '');

  useEffect(() => {
    document.title = `${client.name} | ${client.city}`;
  }, [client.name, client.city]);

  const themeVars = {
    '--ink': theme.ink,
    '--signal': theme.signal,
    '--metal': theme.metal,
    '--paper': theme.paper,
  };

  return (
    <div style={themeVars} className="min-h-screen bg-white text-slate-800 pb-20 md:pb-0">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link to={`/${client.id}`} className="flex items-baseline gap-2 text-ink" aria-label={`${client.name} home`}>
            <span className="font-display font-extrabold text-3xl md:text-4xl leading-none tracking-tight">
              {client.logoText || client.name.split(' ')[0]}
            </span>
            {client.logoSub && (
              <span className="font-display font-medium text-xl md:text-2xl leading-none text-metal">{client.logoSub}</span>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-7 font-medium text-slate-700" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-ink hover:underline underline-offset-4">{n.label}</a>
            ))}
            <a href={tel} className="bg-signal text-white font-semibold px-4 py-2.5 rounded flex items-center gap-2 hover:brightness-110">
              <Phone size={18} aria-hidden="true" />
              {client.phone}
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 text-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" className="md:hidden border-t border-slate-200 px-4 py-2" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block py-3 text-lg font-medium text-ink border-b border-slate-100 last:border-0">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero: the phone number is the headline act */}
      <section className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14 md:pt-20 md:pb-20 grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-8">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight max-w-[16ch]">
              {hero.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-[52ch]">{hero.sub}</p>

            <div className="mt-10 md:mt-12">
              <p className="text-white/70 font-medium">{hero.urgent}</p>
              <a href={tel} className="group inline-block mt-1" aria-label={`Call ${client.name} at ${client.phone}`}>
                <span className="block font-display font-extrabold leading-none tracking-tight text-[clamp(3rem,16vw,7.25rem)] group-hover:text-[color-mix(in_srgb,var(--metal),white_55%)] transition-colors">
                  {client.phone}
                </span>
                <PipeRun className="block w-full h-4 md:h-5 mt-2" />
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={tel} className="bg-signal text-white font-semibold text-lg px-6 py-3 rounded flex items-center gap-2 hover:brightness-110">
                  <Phone size={20} aria-hidden="true" /> Call now
                </a>
                <a href={sms} className="bg-white/10 text-white font-semibold text-lg px-6 py-3 rounded flex items-center gap-2 hover:bg-white/20">
                  <MessageSquare size={20} aria-hidden="true" /> Send a text
                </a>
              </div>
            </div>
          </div>

          <aside className="md:col-span-4 md:pl-8 md:border-l md:border-white/15 self-end">
            <h2 className="font-display font-semibold text-2xl">Where we work</h2>
            <ul className="mt-3 space-y-1 text-lg text-white/85">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
            {client.locationNote && (
              <p className="mt-4 text-white/60 flex gap-2"><MapPin size={18} className="shrink-0 mt-0.5" aria-hidden="true" />{client.address}. {client.locationNote}.</p>
            )}
          </aside>
        </div>
      </section>

      {/* Facts */}
      {facts?.length > 0 && (
        <section className="bg-paper border-b border-slate-200" aria-label={`Why ${client.name}`}>
          <dl className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {facts.map((f) => (
              <div key={f.value} className="lg:border-l-2 lg:border-metal lg:pl-5">
                <dt className="font-display font-bold text-3xl text-ink leading-tight">{f.value}</dt>
                <dd className="mt-1 text-slate-600 leading-snug">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Services */}
      <section id="services" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading>What we work on</SectionHeading>
        <div className="mt-10 grid md:grid-cols-2 gap-12 md:gap-16">
          <ServiceList title="For your home" items={services?.home} />
          <ServiceList title="For your business" items={services?.business} />
        </div>
        <p className="mt-10 text-lg text-slate-700">
          Don’t see your job here? <a href={tel} className="font-semibold text-ink underline underline-offset-4 decoration-metal decoration-2 hover:decoration-signal">Call and ask.</a>
        </p>
      </section>

      {/* Offers (only for clients that have them) */}
      {offers?.length > 0 && (
        <section className="bg-paper py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading>Current offers</SectionHeading>
            <ul className="mt-10 grid md:grid-cols-3 gap-6">
              {offers.map((o) => (
                <li key={o.title} className="bg-white border-2 border-dashed border-slate-300 rounded p-6">
                  <p className="font-display font-extrabold text-4xl text-signal leading-none">{o.discount}</p>
                  <p className="mt-3 font-semibold text-lg text-ink">{o.title}</p>
                  <p className="mt-1 text-slate-600">{o.sub}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">Mention the offer when you call.</p>
          </div>
        </section>
      )}

      {/* Story */}
      {story && (
        <section id="story" className="scroll-mt-20 bg-paper border-y border-slate-200 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <SectionHeading className="max-w-[14ch]">{story.headline}</SectionHeading>
              <p className="mt-5 text-lg text-slate-700 leading-relaxed max-w-[48ch]">{story.intro}</p>
            </div>
            {story.timeline?.length > 0 && (
              <ol className="md:col-span-7 md:pl-6">
                {story.timeline.map((t, i) => {
                  const first = i === 0;
                  const last = i === story.timeline.length - 1;
                  return (
                    <li key={t.year} className="grid grid-cols-[4.25rem_1.25rem_1fr] sm:grid-cols-[5.5rem_1.25rem_1fr] gap-x-4 sm:gap-x-6">
                      <span className="font-display font-bold text-3xl text-metal leading-none pt-5 text-right">{t.year}</span>
                      <span className="relative flex justify-center" aria-hidden="true">
                        <span className={`absolute w-1.5 bg-metal ${first ? 'top-7' : 'top-0'} ${last ? 'h-7' : 'bottom-0'}`} />
                        <span className="relative mt-5 w-5 h-5 rounded-full bg-paper border-[3px] border-metal" />
                      </span>
                      <p className="py-4 text-lg text-slate-700 leading-relaxed">{t.text}</p>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </section>
      )}

      {/* Reviews */}
      {reviews?.length > 0 && (
        <section id="reviews" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <SectionHeading>What customers say</SectionHeading>
          <ul className="mt-10 grid md:grid-cols-2 gap-10">
            {reviews.map((r) => (
              <li key={r.author} className="border-t-2 border-ink pt-5">
                <p className="text-xl text-slate-800 leading-relaxed">
                  {r.quote ? `“${r.text}”` : r.text}
                </p>
                <p className="mt-4 font-semibold text-ink">
                  {r.author} <span className="font-normal text-slate-500">({r.date})</span>
                </p>
              </li>
            ))}
          </ul>
          {client.reviewsSource && (
            <p className="mt-8">
              <a href={client.reviewsSource} className="text-ink font-semibold underline underline-offset-4 decoration-metal decoration-2 hover:decoration-signal">
                Read the full testimonials
              </a>
            </p>
          )}
        </section>
      )}

      {/* Contact / footer */}
      <footer id="contact" className="scroll-mt-20 bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">Need a plumber? Call us.</h2>
            <a href={tel} className="mt-6 inline-flex items-center gap-3 bg-signal text-white font-display font-bold text-3xl sm:text-4xl px-6 py-4 rounded hover:brightness-110">
              <Phone size={30} aria-hidden="true" /> {client.phone}
            </a>
            {client.email && (
              <p className="mt-5 text-lg">
                <a href={`mailto:${client.email}`} className="inline-flex items-center gap-2 text-white/85 hover:text-white underline underline-offset-4 decoration-white/30 break-all">
                  <Mail size={18} className="shrink-0" aria-hidden="true" /> {client.email}
                </a>
              </p>
            )}
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/15 space-y-4 text-white/75 text-lg">
            <p className="font-display font-semibold text-2xl text-white">{client.name}</p>
            <p>{client.address || client.city}</p>
            <p>{client.license}{client.licenseClass && <><br />{client.licenseClass}</>}</p>
            <p>Serving {areas.join(', ')}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-white/50">
            © {new Date().getFullYear()} {legal}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-slate-300 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
        <a href={tel} className="bg-signal text-white font-semibold text-lg py-4 flex items-center justify-center gap-2">
          <Phone size={20} aria-hidden="true" /> Call
        </a>
        <a href={sms} className="bg-ink text-white font-semibold text-lg py-4 flex items-center justify-center gap-2">
          <MessageSquare size={20} aria-hidden="true" /> Text
        </a>
      </div>
    </div>
  );
}
