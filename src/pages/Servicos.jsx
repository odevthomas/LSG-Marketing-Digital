import React from 'react';
import Navbar from '../components/Navbar';
import ChatbotSection from '../components/Servicos/ChatbotSection';
import ServicesSection from '../components/Servicos/ServicesSection';
import FaqSection from '../components/Servicos/FaqSection';
import FormularioContato from '../components/Formularios/FormularioContato';
import Footer from '../components/Footer';  // Importando o componente Footer
import FloatingWhatsAppComponent from '../components/Buttons/FloatingWhatsApp'; // Caminho do componente


const Servicos = () => {
  return (
    <>
      {/* Barra de navegação */}
      <Navbar />
      
      {/* Seção do Chatbot */}
      <ChatbotSection />
      
      {/* Seção dos serviços oferecidos */}
      <ServicesSection />
        <div className="fixed bottom-5 right-5 z-40">
        <FloatingWhatsAppComponent />
      </div>
      {/* Seção de Perguntas Frequentes */}
      <FaqSection />
      
      {/* Formulário de Contato */}
      <FormularioContato />
      
      {/* Rodapé da página */}
      <Footer />
    </>
  );
};

export default Servicos;
