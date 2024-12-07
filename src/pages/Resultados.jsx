import React from 'react';
import Footer from '../components/Footer';
import CertificationSection from '../components/Resultados/CertificationSection';
import Navbar from '../components/Navbar';
import SeloSection from '../components/Resultados/SeloSection';
import Statistics from '../components/Resultados/Statistics';
import FloatingWhatsAppComponent from '../components/Buttons/FloatingWhatsApp'; // Caminho do componente


// Importando o componente SectionResultados corretamente
import SectionResultados from '../components/Resultados/SectionResultados';  // Ajuste o caminho se necessário

const Resultados = () => {
  return (
    <>
      <Navbar />
      <SectionResultados />  {/* Agora o componente SectionResultados pode ser usado */}
      <Statistics />
      <CertificationSection /> 
      <SeloSection /> 
      
      <Footer />

        <div className="fixed bottom-5 right-5 z-40">
        <FloatingWhatsAppComponent />
      </div>
    </>
  );
};

export default Resultados;
