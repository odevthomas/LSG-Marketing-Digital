import React from 'react';
import Footer from '../components/Footer';
import CertificationSection from '../components/Resultados/CertificationSection';
import Navbar from '../components/Navbar';
import SeloSection from '../components/Resultados/SeloSection';
import WhatsAppButton from '../components/Buttons/WhatsAppButton'; // Caminho do componente


// Importando o componente SectionResultados corretamente
import SectionResultados from '../components/Resultados/SectionResultados';  // Ajuste o caminho se necessário

const Resultados = () => {
  return (
    <>
      <Navbar />
      <SectionResultados />  {/* Agora o componente SectionResultados pode ser usado */}
      <CertificationSection /> 
      <SeloSection /> 
      
      <Footer />

        <div className="fixed bottom-5 right-5 z-40">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Resultados;
