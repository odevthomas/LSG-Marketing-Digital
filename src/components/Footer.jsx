import React from 'react';
import { Link } from 'react-router-dom';
import DeveloperInfo from "./DeveloperInfo"; // Importe o componente DeveloperInfo

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-5">
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
            <p className="text-sm">&copy; 2024 LSG Digital. Todos os direitos reservados.</p>
            <p className="text-sm">
              Entre em contato pelo WhatsApp: 
              <a 
                href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0" 
                className="underline text-red-500 hover:text-red-400 transition-colors"
              >
                Clique aqui
              </a>
            </p>
          </div>

          {/* Botão Voltar ao Topo */}
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-400 transition-colors"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
      {/* Adicionando informações do desenvolvedor */}
      <DeveloperInfo />
    </footer>
  );
};

export default Footer;