import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CertificadoAvatar from '../components/CertificadoAvatar'; // Ajuste o caminho conforme necessário

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Caminhos das rotas no React Router
  const navigation = [
    { title: "Clientes", path: "/Home" },
    { title: "Resultados", path: "/resultados" },
    { title: "Serviços", path: "/servicos" },
  ];

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <nav className="bg-black w-full border-b md:border-0 hover:opacity-75 z-10">
      <div className="flex items-center justify-between px-4 py-4 md:py-4 max-w-screen-2xl mx-auto md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/img/logo-2.png"
            width={50}
            height={60}
            alt="LSG logo"
            className="shadow-none"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* CertificadoAvatar - Centralizado */}
        <div className="flex flex-1 justify-center md:absolute top-0 left-1/2 transform -translate-x-1/2">
          <CertificadoAvatar />
        </div>

        {/* Menu Toggle Button (Hambúrguer) para mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu de navegação para dispositivos móveis e desktop */}
        <div
          className={`flex items-center ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 space-x-4`}
        >
          <ul className="flex items-center space-x-10">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:opacity-75 transition duration-200">
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className="hover:text-green-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;