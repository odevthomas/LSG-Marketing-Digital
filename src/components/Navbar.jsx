import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CertificadoAvatar from '../components/CertificadoAvatar'; // Ajuste o caminho conforme necessário

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { title: "Clientes", path: "/Home" },
    { title: "Resultados", path: "/resultados" },
    { title: "Serviços", path: "/servicos" },
  ];

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <nav className="bg-black w-full border-b md:border-0">
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-2xl mx-auto md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/img/logo-2.png"
            width={100}
            height={60}
            alt="LSG logo"
            className="shadow-none"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Botão hambúrguer no mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu de navegação */}
        <div
          className={`flex-col md:flex md:flex-row items-center ${
            isOpen ? 'flex' : 'hidden'
          } w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-white hover:text-green-500 transition duration-200"
              >
                <Link to={item.path} onClick={handleLinkClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* CertificadoAvatar - visível em todos os dispositivos */}
          <div className="mt-4 md:mt-0">
            <CertificadoAvatar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;