
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import RFEng from './pages/RFEng.jsx'
import Astro from './pages/Astro.jsx'
import Revamping from './pages/Revamping.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="microwave_engineering" element={<RFEng />} />  
          <Route path="astronomy" element={<Astro />} />  
      </Routes>
    </HashRouter>
  );
}

export default App;
