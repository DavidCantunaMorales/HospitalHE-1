import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PagPrincipal } from './components/PagPrincipal.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PagPrincipal />
  </StrictMode>
);
