import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/home/Home.tsx';
import InputOpt from '@/pages/input/InputOpt.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/input'} element={<InputOpt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
