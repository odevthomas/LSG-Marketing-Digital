import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo-nova.png" alt="LSG logo" className="h-24 md:h-36" />
            </Link>
          </div>

          {/* Links Úteis Inline */}
          <div className="flex space-x-12 text-lg">
            {['Sobre o Desenvolvedor', 'Política de Privacidade', 'Termos de Uso'].map((text, index) => (
              <button 
                key={index}
                onClick={() => openModal(text.toLowerCase().replace(/\s/g, ''))}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToTop} 
            className="bg-[#f11414] text-white py-3 px-8 rounded-full text-lg hover:bg-[#d40f0f] transition duration-300 transform hover:scale-105"
          >
            Voltar ao Topo
          </button>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-6 text-center">
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} LSG. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modais */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black p-8 rounded-lg w-3/4 md:w-1/3 shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white font-bold text-3xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-100">
              {modalContent === 'sobre' ? 'Sobre o Desenvolvedor' : modalContent === 'privacidade' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h2>
            <div className="text-gray-200">
              {modalContent === 'sobre' && (
                <>
                  <p className="mb-3">Este site foi desenvolvido por <strong>Thomas Eduardo R Nascimento</strong>, um desenvolvedor frontend focado em criar experiências digitais modernas e intuitivas.</p>
                  <p className="mb-3">Entre em contato pelo e-mail: 
                    <a href="mailto:developer.thomas@outlook.com.br" className="text-blue-400 hover:underline ml-1">developer.thomas@outlook.com.br</a>
                  </p>
                  <p className="mb-2">Conecte-se comigo nas redes sociais:</p>
                  <ul className="flex justify-center space-x-4 mb-4">
                    {[{icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/devthm/"}, 
                      {icon: <FaGithub size={24} />, link: "https://github.com/devthmedu"},
                      {icon: <FaInstagram size={24} />, link: "https://www.instagram.com/_devthm/"}].map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-900 hover:text-blue-500 transition"
                        >
                          {item.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <a 
                      href="https://wa.me/19999042072" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-x-2 py-2 px-4 text-sm font-medium rounded-lg bg-green-500 text-black hover:bg-green-600 transition"
                    >
                      <FaWhatsapp size={20} />
                      Entrar em contato via WhatsApp
                    </a>
                  </div>
                </>
              )}
              {modalContent === 'privacidade' && (
                <>
                  <p className="mb-4">A sua privacidade é muito importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações dos nossos usuários.</p>
                  <p className="mb-4">Nós coletamos informações pessoais apenas quando você as fornece voluntariamente. Isso inclui, mas não se limita a, e-mail, nome e número de telefone.</p>
                  <p className="mb-4">Nós usamos essas informações para fornecer um melhor serviço e para fins de marketing. Não compartilhamos suas informações com terceiros.</p>
                  <p className="mb-4">Se você tiver dúvidas, entre em contato conosco através do e-mail: <a href="mailto:comercial@lsgdigital.com.br" className="text-blue-400 hover:underline">comercial@lsgdigital.com.br</a></p>
                </>
              )}
              {modalContent === 'termos' && (
                <>
                  <p className="mb-4">Estes Termos de Uso regulam o acesso e a utilização do site. Ao acessar e usar nosso site, você concorda com os seguintes termos.</p>
                  <p className="mb-4">É proibido utilizar o site para fins ilegais.</p>
                  <p className="mb-4">Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer momento.</p>
                  <p className="mb-4">Dúvidas? Entre em contato: <a href="mailto:comercial@lsgdigital.com.br" className="text-blue-400 hover:underline">comercial@lsgdigital.com.br</a></p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;