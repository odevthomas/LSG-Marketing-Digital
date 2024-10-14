import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from '../src/components/Contact/Form';
import Services from '../src/components/Contact/Services/Services';
import HeroSection from '../src/components/HeroSection/HeroSection';
import Testimonial from '../src/components/Home/Page'; // Renomeado para inglês
import Resultados from '../src/components/Result/Result'; // Renomeado para "Resultados"

import './styles/App.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Testimonial />} />
          <Route path="/resultados" element={<Resultados />} /> {/* Caminho alterado para "resultados" */}
          <Route path="/servicos" element={<Services />} />
          <Route path="/form" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
