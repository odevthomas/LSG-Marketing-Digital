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
    <nav className="bg-black w-full border-b md:border-0">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-2xl mx-auto md:px-8">
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

        {/* Menu Toggle Button (Hambúrguer) para mobile */}
       

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

          {/* CertificadoAvatar - Aparece somente no desktop */}
          <div className="hidden md:flex items-center ml-4">
            <CertificadoAvatar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
