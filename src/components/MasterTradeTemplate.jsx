import { ArrowRight, Menu, MessageSquare, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CLIENTS, DEFAULT_CLIENT } from '../data';

export default function MasterTradeTemplate() {
  const { clientId } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const client = CLIENTS[clientId] || DEFAULT_CLIENT;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-800">
      
      {/* 1. TOP DUAL ACTION BAR (Call & Text buttons) */}
      <div className="bg-[#0b3b82] py-2 px-4 border-b border-[#082d64]">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white">
          <a 
            href={`tel:${client.rawPhone || '9517847586'}`} 
            className="bg-[#d92323] hover:bg-red-700 text-white px-5 py-2 rounded-sm shadow flex items-center gap-1.5 transition-colors"
          >
            <Phone size={14} fill="currentColor" />
            <span>CALL {client.phone}</span>
          </a>
          <a 
            href={`sms:${client.rawPhone || '9517847586'}`} 
            className="bg-[#072552] hover:bg-[#051a3a] text-white px-5 py-2 rounded-sm shadow flex items-center gap-1.5 border border-blue-400/20 transition-colors"
          >
            <MessageSquare size={14} />
            <span>TEXT (951) 784-7586</span>
          </a>
        </div>
      </div>

      {/* 2. WHITE HEADER WITH LOGO */}
      <header className="bg-white py-4 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={`/${client.id}`} className="flex items-center gap-3">
            <div className="border-2 border-red-600 p-1.5 rounded-sm">
              <span className="font-black text-2xl tracking-tighter text-blue-900 leading-none block">
                TONKIN
              </span>
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-blue-950 uppercase block leading-none">
                {client.name}
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Plumbing & Drain Cleaning
              </span>
            </div>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-blue-950 hover:bg-slate-100 rounded"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="max-w-5xl mx-auto pt-4 mt-3 border-t border-slate-200 flex flex-col gap-2 font-bold text-sm text-blue-950 uppercase">
            <a href="#residential" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-red-600">Residential Plumber</a>
            <a href="#commercial" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-red-600">Commercial Plumber</a>
            <a href="#emergency" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-red-600">24/7 Emergency Plumber</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-red-600">All Plumbing Services</a>
          </div>
        )}
      </header>

      {/* 3. HERO TRUCK BANNER WITH SCALLOPED/WAVE BOTTOM */}
      <div className="relative bg-slate-200">
        <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center">
          {/* Van Mockup Background */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80')` }}></div>
          <div className="relative z-10 text-center px-4">
            <div className="inline-block bg-white/95 px-6 py-4 rounded shadow-2xl border-b-4 border-red-600 max-w-md">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-1">Serving Riverside Since 1987</span>
              <p className="text-2xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight">Family Owned & Operated</p>
              <p className="text-sm font-bold text-slate-700 mt-1">Full Fleet of 5+ Fully-Equipped Service Vans</p>
            </div>
          </div>
        </div>

        {/* Curved Wave Bottom Divider (exact match to The Plumbing Source) */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-14 fill-[#0b3b82]">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* 4. SOLID BLUE SECTION WITH FLOATING WHITE CONTENT CARDS */}
      <section className="bg-[#0b3b82] pt-4 pb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Card 1: Residential Plumber */}
          <div id="residential" className="bg-white rounded-md p-8 sm:p-10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              Residential Plumber
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed italic">
              <p>
                Our local residential plumbers serve the Riverside area, Poly High district, Corona, and beyond.
              </p>
              <p>
                We specialize in the installation of <span className="text-red-700 font-bold not-italic">gas or electric hot water heaters</span>, as well as <span className="text-red-700 font-bold not-italic">Rinnai tankless water heaters</span>.
              </p>
              <p className="text-slate-800 font-semibold not-italic border-l-4 border-red-600 pl-4 my-4">
                "From clogged drains to whole-home repipes, we can do it all. Call for a free estimate today."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">CA Lic #512803</span>
              <a href={`tel:${client.rawPhone || '9517847586'}`} className="bg-[#d92323] hover:bg-red-700 text-white font-black text-xs uppercase px-4 py-2 rounded-sm shadow">
                Call (951) 784-7586
              </a>
            </div>
          </div>

          {/* Card 2: Commercial Plumber */}
          <div id="commercial" className="bg-white rounded-md p-8 sm:p-10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              Commercial Plumber
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed italic">
              <p>
                Our commercial plumbers in Riverside also serve the entire Inland Empire with our dedicated fleet of service vehicles.
              </p>
              <p>
                We fix plumbing problems for restaurants, retail buildings, offices, apartment complexes, and light industrial facilities.
              </p>
              <p className="text-slate-900 font-bold not-italic">
                Our plumbers are available 24/7 for all your commercial facility emergencies.
              </p>
            </div>
            <div className="mt-6">
              <a 
                href={`tel:${client.rawPhone || '9517847586'}`} 
                className="w-full block text-center bg-blue-950 hover:bg-slate-900 text-white font-black uppercase text-sm py-3.5 rounded-sm shadow tracking-wider"
              >
                CLICK TO CALL
              </a>
            </div>
          </div>

          {/* Card 3: Emergency Plumber */}
          <div id="emergency" className="bg-white rounded-md p-8 sm:p-10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              Emergency Plumber
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium italic mb-4">
              Tonkin Plumbing offers 24 hour Emergency Plumbing Service as well as:
            </p>
            <ul className="space-y-2 text-slate-700 font-bold text-sm sm:text-base italic mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>Backflow testing & certified repairs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>Sewer lateral video camera inspections</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>Electronic acoustic slab leak detection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>Grease trap hydro jetting & mainline clearing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>Whole-home copper and PEX repiping</span>
              </li>
            </ul>
            <div className="bg-slate-100 p-4 rounded text-center">
              <p className="text-xs uppercase font-black text-slate-500 tracking-widest mb-1">24 Hour Dispatch</p>
              <a href={`tel:${client.rawPhone || '9517847586'}`} className="text-2xl sm:text-3xl font-black text-red-600 hover:underline">
                (951) 784-7586
              </a>
            </div>
          </div>

          {/* 5. JOB PROOF GALLERY CARDS (Like "Water Line Burst", "Buckled Wood Floor") */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white rounded-md p-5 text-center shadow-lg">
              <h3 className="font-black text-slate-900 uppercase text-sm mb-1">Water Line Burst</h3>
              <p className="text-xs text-slate-500 italic mb-3">Underground front yard main break</p>
              <a href={`tel:${client.rawPhone || '9517847586'}`} className="text-xs font-black text-blue-700 hover:text-red-600 flex items-center justify-center gap-1">
                <span>See More</span> <ArrowRight size={12} />
              </a>
            </div>

            <div className="bg-white rounded-md p-5 text-center shadow-lg">
              <h3 className="font-black text-slate-900 uppercase text-sm mb-1">Tonkin Work</h3>
              <p className="text-xs text-slate-500 italic mb-3">Our Recent Riverside Plumbing Projects</p>
              <a href={`tel:${client.rawPhone || '9517847586'}`} className="text-xs font-black text-blue-700 hover:text-red-600 flex items-center justify-center gap-1">
                <span>See More</span> <ArrowRight size={12} />
              </a>
            </div>

            <div className="bg-white rounded-md p-5 text-center shadow-lg">
              <h3 className="font-black text-slate-900 uppercase text-sm mb-1">Buckled Wood Floor</h3>
              <p className="text-xs text-slate-500 italic mb-3">Common sign of slab leaks inside the home</p>
              <a href={`tel:${client.rawPhone || '9517847586'}`} className="text-xs font-black text-red-600 hover:underline flex items-center justify-center gap-1">
                <span>Free Leak Detection →</span>
              </a>
            </div>
          </div>

          {/* 6. EXPANDED SERVICE LIST */}
          <div id="services" className="bg-white rounded-md p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6 uppercase border-b-2 border-slate-100 pb-3">
              Other Plumbing Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-slate-700 font-semibold text-sm sm:text-base italic">
              <div className="space-y-2">
                <p>• Leak Detection & Repair</p>
                <p>• Water Heaters (Standard & Tankless)</p>
                <p>• Slab Leak Repairs</p>
                <p>• Sewer Main Line Re-pipes</p>
                <p>• Drain & Sewer Hydro Jetting</p>
                <p>• Water Pressure Regulators</p>
              </div>
              <div className="space-y-2">
                <p>• Water Filtration Systems</p>
                <p>• Valves & Emergency Shut Offs</p>
                <p>• Faucets, Sinks, Toilets & Urinals</p>
                <p>• Gas Line Leak Detection & Repair</p>
                <p>• Commercial Garbage Disposals</p>
                <p>• Backflow Testing & Certification</p>
              </div>
            </div>
          </div>

          {/* 7. SLAB LEAK SECTION */}
          <div className="bg-white rounded-md p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              Slab Leak Repairs & Leak Detection
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium italic leading-relaxed mb-4">
              Water pooling in your yard, or a warm wet spot on your floors? Water bill a little higher than it should be? If you think you have a water leak in your slab, wall, floor, or ceiling, call Tonkin Plumbing now for a free leak inspection!
            </p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Keeping Riverside in hot water since 1987.
            </p>
          </div>

        </div>
      </section>

      {/* 8. SIMPLE FOOTER */}
      <footer className="bg-[#072552] text-slate-300 text-xs py-10 px-4 border-t-4 border-red-600 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-black text-white text-base uppercase tracking-wider">
            {client.name}
          </p>
          <p className="text-slate-400 italic">
            Riverside, CA 92507 (Vine St corridor) • CA License #512803
          </p>
          <p className="text-xl font-black text-white">
            CALL (951) 784-7586
          </p>
          <div className="pt-4 border-t border-blue-900 text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Tonkin Plumbing, Inc. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}