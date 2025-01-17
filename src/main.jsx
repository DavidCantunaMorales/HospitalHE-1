import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { CPagPrincipal } from './components/CPagPrincipal';
import { CAdmitirPaciente1 } from './components/CAdmitirPaciente1';
import { CAdmitirPaciente2 } from './components/CAdmitirPaciente2';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<CPagPrincipal />} />
        {/* Otras páginas */}
        <Route path="/nueva-admision" element={<CAdmitirPaciente1 />} />
        <Route path="/nueva-admision2" element={<CAdmitirPaciente2 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
