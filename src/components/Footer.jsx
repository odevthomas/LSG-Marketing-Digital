import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000] text-white py-5">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo ou nome da empresa */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-semibold flex items-center space-x-2">
              <img src="/img/logo-2.png" alt="LSG logo" className="h-12" />
            </Link>
          </div>

          {/* Informações de contato */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <p className="text-sm text-white">&copy; 2024 LSG Digital. Todos os direitos reservados.</p>
            <p className="text-sm text-white">
              Entre em contato pelo WhatsApp: 
              <a 
                href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0" 
                className="underline text-[#fb1603] hover:text-white transition-colors"
              >
                Clique aqui
              </a>
            </p>
          </div>

          {/* Botão Voltar ao Topo */}
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-[#fb1603] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#e65c30] transition-colors"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;