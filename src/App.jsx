
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Revamping from './pages/Revamping.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Revamping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
