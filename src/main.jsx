import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // for Tailwind or your global styles
import "@fontsource-variable/noto-serif"; 
import "@fontsource-variable/noto-sans"; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);