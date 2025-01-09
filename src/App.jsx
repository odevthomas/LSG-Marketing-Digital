import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactForm from './components/Formularios/FormularioContato';
import Home from './pages/Home';

import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />
          {/* Rota para o formulário de contato */}
          <Route path="/contactForm" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;