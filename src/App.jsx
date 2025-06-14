
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import RFEng from './pages/RFEng.jsx'
import Revamping from './pages/Revamping.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Revamping />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/RF_engineer" element={<RFEng />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
