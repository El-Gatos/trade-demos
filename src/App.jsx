import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DemoSwitcher from './components/DemoSwitcher';
import MasterTradeTemplate from './components/MasterTradeTemplate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><MasterTradeTemplate /><DemoSwitcher /></>} />
        <Route path="/:clientId" element={<><MasterTradeTemplate /><DemoSwitcher /></>} />
      </Routes>
    </BrowserRouter>
  );
}