import React from 'react';  // Adicione isso
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactForm from './components/Formularios/FormularioContato';
import HomeVideo from './pages/HomeVideo';
import Home from './pages/Home';
import Services from './pages/Servicos';
import Resultados from './pages/Resultados';

import './styles/App.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeVideo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contactForm" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
