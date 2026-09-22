import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CLIENTS, DEFAULT_CLIENT } from '../data';

export default function DemoSwitcher() {
  const [open, setOpen] = useState(false);
  const { clientId } = useParams();
  const navigate = useNavigate();

  const currentClient = CLIENTS[clientId] || DEFAULT_CLIENT;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="bg-slate-900 border border-slate-700 text-white rounded-xl shadow-2xl p-4 w-72 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">Trade Demos Hub</span>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
              <X size={16} />
            </button>
          </div>
          <div className="space-y-1.5">
            {Object.values(CLIENTS).map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  navigate(`/${c.id}`);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  currentClient.id === c.id 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'hover:bg-slate-800 text-slate-300'
                }`}
              >
                <span>{c.name}</span>
                <span className="text-[10px] opacity-70">/{c.id}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider px-3.5 py-2.5 rounded-full border border-slate-700 shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Switch Client ({currentClient.shortName})</span>
        </button>
      )}
    </div>
  );
}