import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Definindo os itens de navegação
  const navigation = [
    { title: "", path: "#servicos" },
    { title: "", path: "#depoimentos" },
  ];

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
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo-nova.png" alt="LSG logo" className="h-24 md:h-36" />
            </Link>
          </div>

          {/* Links Úteis Inline */}
          <div className="flex flex-col md:flex-row md:space-x-12 text-lg">
            <button 
              onClick={() => openModal('sobre')}
              className="text-gray-400 hover:text-white transition duration-300 mb-2 md:mb-0"
            >
              Sobre o Desenvolvedor
            </button>
            <button 
              onClick={() => openModal('privacidade')}
              className="text-gray-400 hover:text-white transition duration-300 mb-2 md:mb-0"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => openModal('termos')}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Links de Navegação Dinâmicos */}
        <div className="mt-6 flex justify-center space-x-6 text-lg">
          {navigation.map((item) => (
            <Link key={item.title} to={item.path} className="text-gray-400 hover:text-white transition duration-300">
              {item.title}
            </Link>
          ))}
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="mt-8 text-center">
          <button 
            onClick={scrollToTop} 
            className="bg-[#f11414] text-white py-3 px-6 rounded-full text-lg hover:bg-[#d40f0f] transition duration-300"
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
      {isModalOpen && modalContent === 'sobre' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black p-8 rounded-lg w-4/5 md:w-1/3 shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white font-bold text-3xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-100">
              Sobre o Desenvolvedor
            </h2>
            <p className="text-gray-200 mb-3">
              Este site foi desenvolvido por <strong>Thomas Eduardo R Nascimento</strong>, um desenvolvedor frontend focado em criar experiências digitais modernas e intuitivas.
            </p>
            <p className="text-gray-200 mb-3">
              Entre em contato pelo e-mail: 
              <a 
                href="mailto:developer.thomas@outlook.com.br" 
                className="text-blue-400 hover:underline ml-1"
              >
                developer.thomas@outlook.com.br
              </a>
            </p>

            <p className="text-gray-200 mb-2">Conecte-se comigo nas redes sociais:</p>
            <ul className="flex justify-center space-x-4 mb-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/devthm/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-900 hover:text-blue-500 transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/devthmedu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-900 hover:text-blue-500 transition"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/_devthm/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-900 hover:text-blue-500 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>

            <div className="mt-6 flex justify-center">
              <a 
                href="https://wa.me/19999042072?text=Oi,%20achei%20seu%20contato%20na%20LSG%20e%20gostaria%20de%20bater%20um%20papo."
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-x-2 py-2 px-4 text-sm font-medium rounded-lg bg-green-500 text-black hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
                Entrar em contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal Política de Privacidade */}
      {isModalOpen && modalContent === 'privacidade' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black p-8 rounded-lg w-4/5 md:w-1/3 shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white font-bold text-3xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-100">
              Política de Privacidade
            </h2>
            <div className="text-gray-900">
              <p className="mb-4">A sua privacidade é muito importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações dos nossos usuários.</p>
              <p className="mb-4">Nós coletamos informações pessoais apenas quando você as fornece voluntariamente. Isso inclui, mas não se limita a, e-mail, nome e número de telefone.</p>
              <p className="mb-4">Nós usamos essas informações para fornecer um melhor serviço e para fins de marketing. Não compartilhamos suas informações com terceiros, a menos que seja necessário para fornecer o serviço solicitado.</p>
              <p className="mb-4">Se você tiver dúvidas sobre a Política de Privacidade, entre em contato conosco através do e-mail: <a href="mailto:comercial@lsgdigital.com.br" className="text-blue-400 hover:underline">comercial@lsgdigital.com.br</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Termos de Uso */}
      {isModalOpen && modalContent === 'termos' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black p-8 rounded-lg w-4/5 md:w-1/3 shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white font-bold text-3xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-100">
              Termos de Uso
            </h2>
            <div className="text-gray-900">
              <p className="mb-4">Estes Termos de Uso regulam o acesso e a utilização do site. Ao acessar e usar nosso site, você concorda com os seguintes termos e condições.</p>
              <p className="mb-4">É proibido utilizar o site para fins ilegais, que possam prejudicar outros usuários ou infringir as leis vigentes.</p>
              <p className="mb-4">Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer momento.</p>
              <p className="mb-4">Se você tiver dúvidas sobre os Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:comercial@lsgdigital.com.br" className="text-blue-400 hover:underline">comercial@lsgdigital.com.br</a></p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;