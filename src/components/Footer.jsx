import React, { useState } from "react";
import { Link } from "react-router-dom"; // Certifique-se de importar Link do react-router-dom
import DeveloperInfo from "./DeveloperInfo"; // Importe o componente DeveloperInfo

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [modalContent, setModalContent] = useState(null); // Estado para controlar o conteúdo do modal

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Função para rolar suavemente para o topo
  };

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen(!isModalOpen); // Alterna a visibilidade do modal
  };

  return (
    <footer className="bg-[#000] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-semibold flex items-center space-x-2">
              <img src="/img/logo-2.png" alt="LSG logo" className="h-12" />
            </Link>
          </div>

          {/* Links Úteis */}
          <div>
            <ul>
              <li>
                <a href="#" onClick={() => toggleModal(<DeveloperInfo />)} className="hover:underline text-gray-light">Sobre o Desenvolvedor</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com/lsgdigital" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-light">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/lsgdigital/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-light">Instagram</a>
              </li>
            </ul>
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
          <p>&copy; {new Date().getFullYear()} lsgdigita. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal de Sobre o Desenvolvedor */}
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
          background: #1a1a1a; /* Fundo mais escuro */
          color: white; /* Cor da fonte clara */
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          overflow-y: auto; /* Permite rolagem se o conteúdo for muito longo */
          max-height: 80vh; /* Limita a altura do modal */
        }
        .close-modal {
          background-color: #e53e3e; /* Cor do botão de fechar */
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s;
        }
        .close-modal:hover {
          background-color: #c53030; /* Cor do botão ao passar o mouse */
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