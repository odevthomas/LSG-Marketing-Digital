import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import DeveloperInfo from "./DeveloperInfo"; 
import PrivacyPolicyAndTerms from "./PrivacyPolicyAndTerms"; 
import TermsOfUse from "./TermsOfUse"; 

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState(null); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen(prev => !prev); 
  };

  return (
    <footer className="bg-[#1212127b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/img/logo-2.png" alt="LSG logo" className="h-32" />
            </Link>
          </div>

          {/* Links Úteis */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" onClick={() => toggleModal(<DeveloperInfo onClose={() => toggleModal(null)} />)} className="hover:underline text-gray-light mb-2">
              Sobre o Desenvolvedor
            </a>
            <a href="#" onClick={() => toggleModal(<PrivacyPolicyAndTerms onClose={() => toggleModal(null)} />)} className="hover:underline text-gray-light mb-2">
              Política de Privacidade
            </a>
            <a href="#" onClick={() => toggleModal(<TermsOfUse onClose={() => toggleModal(null)} />)} className="hover:underline text-gray-light mb-2">
              Termos de Uso
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-end">
            <span className="font-bold mb-2">Siga-nos</span>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/casalellit" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-light">
                Facebook
              </a>
              <a href="https://www.instagram.com/casalellit/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-light">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="mt-10 text-center">
          <button 
            onClick={scrollToTop} 
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition-colors"
          >
            Voltar ao Topo
          </button>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-10 text-center">
          <p>&copy; {new Date().getFullYear()} Casa Lellit. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {modalContent}
            <button onClick={() => toggleModal(null)} className="close-modal">
              Fechar
            </button>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #1a1a1a; 
          color: white; 
          padding: 20px;
          border-radius: 12px; 
          width: 90%;
          max-width: 600px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          overflow-y: auto;
          max-height: 80vh; 
        }
        .close-modal {
          background-color: #e53e3e; 
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s;
        }
        .close-modal:hover {
          background-color: #c53030; 
        }
        @media (max-width: 768px) {
          .modal-content {
            padding: 15px;
          }
          .close-modal {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;