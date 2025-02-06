import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactForm from './components/Formularios/FormularioContato';
import DeveloperInfo from './components/LincensaTermosPolitica/DeveloperInfo';
import TermsOfUse from './components/LincensaTermosPolitica/TermsOfUse';
import PrivacyPolicyAndTerms from './components/LincensaTermosPolitica/PrivacyPolicyAndTerms';

import Home from './pages/Home';

import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />
          <Route path="/sobredeveloper" element={<DeveloperInfo />} />
          <Route path="/contato" element={<ContactForm />} />
          {/* Rota para o formulário de contato */}
          <Route path="/privacidade" element={<PrivacyPolicyAndTerms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;