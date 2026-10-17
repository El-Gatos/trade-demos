import { X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DEMOS } from '../demos';

export default function DemoSwitcher() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const currentDemo = DEMOS.find((demo) => pathname === `/${demo.id}`);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div id="demo-switcher" className="bg-slate-900 border border-slate-700 text-white rounded-xl shadow-2xl p-4 w-72 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">Trade Demos Hub</span>
            <button onClick={() => setOpen(false)} aria-label="Close demo switcher" className="p-2 text-slate-400 hover:text-white"><X size={16} /></button>
          </div>
          <Link to="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-slate-800" aria-current={pathname === '/' ? 'page' : undefined}>All demos</Link>
          {DEMOS.length ? (
            <ul className="space-y-1.5 max-h-72 overflow-y-auto">
              {DEMOS.map((demo) => (
                <li key={demo.id}>
                  <Link to={`/${demo.id}`} onClick={() => setOpen(false)} aria-current={currentDemo?.id === demo.id ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-lg text-sm font-bold ${currentDemo?.id === demo.id ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
                    {demo.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : <p className="px-3 py-2 text-sm text-slate-400">No demos yet.</p>}
        </div>
      ) : (
        <button onClick={() => setOpen(true)} aria-expanded={open} aria-controls="demo-switcher"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider px-3.5 py-2.5 rounded-full border border-slate-700 shadow-xl">
          Switch Client{currentDemo ? ` (${currentDemo.name})` : ''}
        </button>
      )}
    </div>
  );
}
