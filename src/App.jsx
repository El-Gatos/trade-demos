import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import DemoSwitcher from './components/DemoSwitcher';
import { DEMOS } from './demos';

function DemoHub() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-slate-400">Trade Demos</p>
        <h1 className="mt-4 text-4xl font-bold">A different site for every business.</h1>
        <p className="mt-5 text-lg text-slate-300">Individual designs for local trade businesses.</p>
        {DEMOS.length ? (
          <ul className="mt-10 space-y-4">
            {DEMOS.map((demo) => (
              <li key={demo.id}><Link className="block rounded-xl border border-slate-700 p-5 hover:bg-slate-900" to={`/${demo.id}`}>{demo.name}</Link></li>
            ))}
          </ul>
        ) : <p className="mt-10 text-slate-400">No demos yet.</p>}
      </div>
    </main>
  );
}

function DemoPage() {
  const { clientId } = useParams();
  const demo = DEMOS.find((item) => item.id === clientId);
  const Page = demo?.Page;
  return Page ? <Page /> : (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Demo not found</h1>
        <Link className="inline-block mt-6 underline" to="/">Back to Trade Demos</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoHub />} />
        <Route path="/:clientId" element={<DemoPage />} />
        <Route path="*" element={<DemoPage />} />
      </Routes>
      <DemoSwitcher />
    </BrowserRouter>
  );
}
