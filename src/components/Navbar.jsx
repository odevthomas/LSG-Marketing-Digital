import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importando Link para navegação interna
import * as Avatar from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import '../styles/Header.css';  // Para adicionar o estilo CSS

// Dados dos avatares (certificados e parcerias)
const avatarData = [
  {
    name: "Google Ads",
    imgURL: "https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg",
  },
  {
    name: "Meta",
    imgURL: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
  },
  {
    name: "Kommo",
    imgURL: "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png",
  },
];

// Definindo os itens de navegação
const navigation = [
  { title: "Clientes", path: "/home" },
  { title: "Resultados", path: "/resultados" },
  { title: "Serviços", path: "/servicos" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu hamburguer
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo com Link para a página inicial */}
      <div className="logo">
        <Link to="/">  {/* Link para a página inicial */}
          <img src="/img/logo-2.png" alt="Logo" />
        </Link>
      </div>

      {/* Navegação principal */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.title}</Link> {/* Usando Link para navegação interna */}
            </li>
          ))}
        </ul>
      </nav>

      {/* Avatares de Certificados e Parcerias */}
      <div className="certificates">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex items-center text-white -space-x-2">
            {avatarData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative"
              >
                <Avatar.Root
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#f4f4f4]"
                >
                  <Avatar.Image
                    src={item.imgURL}
                    className="h-full w-full object-cover"
                  />
                  <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
                </Avatar.Root>
              </motion.div>
            ))}
          </div>
          <motion.p
            className=" text-gray-100 font-medium mt-2 md:mt-0 md:ml-2 md:block hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Certificações e Parcerias
          </motion.p>
        </div>
      </div>

      {/* Ícone de menu hambúrguer */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
