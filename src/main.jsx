import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Pacientes } from './components/Pacientes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pacientes />
  </StrictMode>
);
