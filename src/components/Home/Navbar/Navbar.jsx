import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CertificadoAvatar from '../../Clientes/CertificadoAvatar'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { title: "Clientes", path: "/home" },
    { title: "Resultados", path: "/resultados" },
    { title: "Serviços", path: "/servicos" },
  ];

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="bg-black w-full border-b md:border-0 md:static">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 max-w-screen-2xl mx-auto md:px-8 py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8"> {/* Adicionado mr-8 aqui */}
            <motion.img
              src="/img/logo-2.png"
              width={150}
              height={50}
              alt="LSG logo"
              className="shadow-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* CertificadoAvatar always visible */}
          <div className="hidden md:flex md:items-center md:ml-4">
            <CertificadoAvatar />
          </div>
        </div>

        <div className="md:hidden mb-4">
          {/* CertificadoAvatar in mobile mode */}
          <CertificadoAvatar />
        </div>

        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" stroke="white" />
              </svg>
            )}
          </button>
        </div>

        <div className={`flex-1 justify-center pb-3 mt-4 md:mt-0 md:block md:pb-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white transition duration-200 transform hover:scale-110">
                <Link
                  to={item.path}
                  className="hover:text-[#25D366] focus:text-[#25D366] focus:outline-none"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <a
            href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
            className="py-3 px-4 text-white bg-[#25D366] hover:bg-[#25D366] rounded-md shadow animate-pulse transition duration-150"
          >
            Conversar Agora!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
