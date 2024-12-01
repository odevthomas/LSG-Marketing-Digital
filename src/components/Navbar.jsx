"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CertificadoAvatar from "../components/CertificadoAvatar"; // Certifique-se de ajustar o caminho do avatar corretamente

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
    <motion.nav
      className="bg-black bg-opacity-100 shadow-md w-full z-10 fixed top-0 left-0 right-0 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img
                src="/img/logo-2.png"
                alt="Logo LSG"
                width={120}
                height={80}
                className="text-white"
              />
            </Link>
 <div className="flex items-center relative">
                <CertificadoAvatar /> {/* Seu componente CertificadoAvatar */}
              </div>
            {/* Botão de Menu Mobile */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu de navegação mobile */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black bg-opacity-70 backdrop-blur-md lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:mx-8">
              {navigation.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="px-3 py-2 mx-3 mt-2 text-white hover:bg-gray-700 rounded-md"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Avatar Certificado e Logo no Avatar no Mobile */}
            
          </div>
        </div>

        {/* Linha de Separação no Mobile */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
