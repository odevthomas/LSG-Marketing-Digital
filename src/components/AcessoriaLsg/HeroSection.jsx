import React, { useState } from 'react';
import logo from '/logo-novas-lsg.png'; // Importe sua logo
import { FaWhatsapp } from 'react-icons/fa'; // Certifique-se de ter o react-icons instalado
import { motion } from 'framer-motion'; // Certifique-se de ter o framer-motion instalado
import * as Avatar from '@radix-ui/react-avatar'; // Certifique-se de ter o radix-ui instalado

const HeroSection = () => {
  const [buttonText, setButtonText] = useState('Transforme sua vida com um clique!');

  const handleMouseEnter = () => {
    setButtonText('Fale conosco e comece sua transformação agora!');
  };

  const handleMouseLeave = () => {
    setButtonText('Transforme sua vida com um clique!');
  };

  const message = "Olá! Vi seu site e estou interessado em descobrir mais sobre seus serviços. Poderia me ajudar?";
  const whatsappNumber = "5519981331191";

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

  return (
    <section
      className="relative py-6 w-full bg-black h-auto bg-cover bg-center bg-fixed flex items-center justify-center"
      aria-label="Chamada para agendamento e informações sobre nossos serviços de beleza e estética"
    >
      <div className="content relative z-10 text-center px-4 py-1 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Exibir os avatares acima do conteúdo */}
        <div className="flex space-x-4 mb-4">
          {avatarData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative"
            >
              <Avatar.Root
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#000000]"
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight uppercase mb-4">
          Transforme sua Presença Digital Hoje!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 font-medium">
          Descubra soluções inovadoras e acessíveis para o seu negócio de beleza e estética.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 font-semibold">
          <span className="text-lg sm:text-xl md:text-2xl ml-2">A partir de </span>
          <span className="price-highlight text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fb1603]">
            R$ 599/mês
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center justify-center border-1 border-[#f11414] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-opacity-50 text-center rounded-full bg-[#f11414]"
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

<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@400;600&display=swap');

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
`}</style>

export default HeroSection;