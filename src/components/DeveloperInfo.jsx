import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Incluí o ícone do WhatsApp

const DeveloperInfo = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Título */}
      <h3 className="text-2xl font-bold text-white mb-4">Sobre o Desenvolvedor</h3>
      
      {/* Descrição */}
      <p className="text-gray-300 mb-3">
        Este site foi desenvolvido por <strong>Thomas Eduardo R Nascimento</strong>, um desenvolvedor frontend focado em criar experiências digitais modernas e intuitivas.
      </p>
      
      {/* Contato */}
      <p className="text-gray-300 mb-3">
        Entre em contato pelo e-mail: 
        <a 
          href="mailto:developer.thomas@outlook.com" 
          className="text-blue-400 hover:underline ml-1"
        >
          developer.thomas@outlook.com
        </a>
      </p>
      
      {/* Redes Sociais */}
      <p className="text-gray-300 mb-2">Conecte-se comigo nas redes sociais:</p>
      <ul className="flex justify-center space-x-4 mb-4">
        <li>
          <a 
            href="https://www.linkedin.com/in/devthm/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/devthmedu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/_devthm/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>

      {/* Botão do WhatsApp */}
      <div className="mt-6 flex justify-center">
        <a 
          href="https://wa.me/19999042072" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-x-2 py-2 px-4 text-sm font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
          Entrar em contato via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default DeveloperInfo;
