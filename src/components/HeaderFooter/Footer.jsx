import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000] text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo-nova.png" alt="LSG logo" className="h-36" />
            </Link>
          </div>

          {/* Links Úteis Inline */}
          <div className="flex space-x-6">
            <Link to="/sobre" className="text-gray-400 hover:underline transition duration-300">Sobre o Desenvolvedor</Link>
            <Link to="/privacidade" className="text-gray-400 hover:underline transition duration-300">Política de Privacidade</Link>
            <Link to="/termos" className="text-gray-400 hover:underline transition duration-300">Termos de Uso</Link>
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="mt-6 text-center">
          <button 
            onClick={scrollToTop} 
            className="bg-[#f11414] text-white py-2 px-4 rounded hover:bg-[#d40f0f] transition-colors duration-300"
          >
            Voltar ao Topo
          </button>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} LSG. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
