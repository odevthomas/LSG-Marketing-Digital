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
    <nav className="bg-black w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-2xl mx-auto md:px-8">
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
 <CertificadoAvatar />

        {/* Menu Toggle Button (Hambúrguer) para mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu de navegação para dispositivos móveis e desktop */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-black md:relative md:flex md:items-center md:space-x-6 md:space-x-4 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-10 p-4 md:p-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-white hover:opacity-75 transition duration-200"
              >
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