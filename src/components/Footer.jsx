import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-8">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo ou nome da empresa */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-semibold">
              <img src="/img/logo-2.png" alt="LSG logo" className="h-32" />
            </Link>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <Link to="/home" className="hover:text-black">Home</Link>
            <Link to="/resultados" className="hover:text-black">Resultados</Link>
            <Link to="/servicos" className="hover:text-black">Serviços</Link>
          </div>

          {/* Informações de contato */}
          <div className="mt-4 md:mt-0">
            <p className="text-sm">&copy; 2024 LSG. Todos os direitos reservados.</p>
            <p className="text-sm">Entre em contato pelo WhatsApp: <a href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0" className="underline text-white hover:text-black">Clique aqui</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
