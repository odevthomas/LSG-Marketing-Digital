import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactForm from '../src/components/Contact/Form'; // Renomeado para maior clareza
import Services from '../src/components/Contact/Services';
import HeroSection from '../src/components/HeroSection/HeroSection';
import Testimonial from '../src/components/Home/Page'; 
import Resultados from '../src/components/Result/Result'; 

import './styles/App.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Testimonial />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
