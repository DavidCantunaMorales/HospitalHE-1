import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AdmitirPaciente2 } from './components/AdmitirPaciente2.jsx';
import { AdmitirPaciente1 } from './components/AdmitirPaciente1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdmitirPaciente2 />
    <AdmitirPaciente1 />
  </StrictMode>
);
