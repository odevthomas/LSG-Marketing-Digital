import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Clientes", path: "/home" },
    { title: "Resultados", path: "/resultados" },
    { title: "Serviços", path: "/servicos" },
  ];

  return (
    <nav className="bg-black w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <motion.img
              src="/img/logo-2.png"
              width={120}
              height={50}
              alt="LSG logo"
              className="shadow-none"
              initial={{ opacity: 0, y: -20 }} // Animação inicial
              animate={{ opacity: 1, y: 0 }} // Animação ao aparecer
              transition={{ duration: 0.5 }} // Duração da animação
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
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
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white transition duration-200 transform hover:scale-110">
                <a href={item.path} className="hover:text-[#25D366]">
                  {item.title}
                </a>
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
