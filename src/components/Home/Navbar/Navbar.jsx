import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto md:px-8">
        <Link to="/" className="flex-grow">
          <motion.img
            src="/img/logo-2.png"
            width={120}
            height={50}
            alt="LSG logo"
            className="shadow-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Nav links */}
      <div className={`flex flex-col items-start ${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out bg-black`}>
        <ul className="flex flex-col justify-center items-start space-y-4 p-4">
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
      {/* WhatsApp link for larger screens */}
      <div className="hidden md:inline-block">
        <a
          href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
          className="py-3 px-4 text-white bg-[#25D366] hover:bg-[#25D366] rounded-md shadow transition duration-150"
        >
          Conversar Agora!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
