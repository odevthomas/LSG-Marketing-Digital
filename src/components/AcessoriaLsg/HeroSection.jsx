import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [buttonText, setButtonText] = useState('Transforme sua Presença Digital');

  const handleMouseEnter = () => {
    setButtonText('Vamos Conectar');
  };

  const handleMouseLeave = () => {
    setButtonText('Transforme sua Presença Digital');
  };

  const message = "Olá! Estou interessado em potencializar minha marca.";
  const whatsappNumber = "5519981331191";

  const brandLogos = [
    "https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg",
    "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png"
  ];

  return (
    <section 
      className="relative py-6 w-full bg-black h-auto bg-cover bg-center flex items-center justify-center"
      aria-label="Transformação digital"
    >
      <div className="content relative z-10 text-center px-4 py-1 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Título para os certificados */}
        <p className="text-white/80 text-sm uppercase tracking-wider mb-4 font-medium">
          Certificados e Parcerias
        </p>

        {/* Logos lado a lado estilo avatar group */}
        <div className="flex items-center justify-center mb-12">
          {brandLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 p-3 shadow-lg hover:scale-105 transition-transform duration-300 -ml-4 first:ml-0 hover:z-10 border border-gray-100/20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              style={{ zIndex: brandLogos.length - idx }}
            >
              <img 
                src={logo}
                alt={`Plataforma ${idx + 1}`}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase mb-4">
          Transforme sua Presença Digital
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 font-medium">
          Soluções estratégicas para impulsionar sua marca
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center justify-center border-1 border-[#f11414] text-white py-3 px-6 text-lg bg-[#f11414] rounded-full hover:bg-[#b23012] transition-colors duration-300"
            aria-label="Clique para falar conosco via WhatsApp"
          >
            <FaWhatsapp className="inline-block mr-2 text-xl" />
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;