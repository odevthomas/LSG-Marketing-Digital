import React, { StrictMode } from 'react'; // Adicione a importação do React
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Elemento 'root' não encontrado no DOM.");
}
