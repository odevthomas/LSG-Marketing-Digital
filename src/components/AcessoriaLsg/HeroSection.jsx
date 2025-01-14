import React, { useState } from 'react';
import logo from '/logo-novas-lsg.png'; // Importe sua logo
import { FaWhatsapp } from 'react-icons/fa'; // Certifique-se de ter o react-icons instalado

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

  return (
    <section
      className="relative py-6 w-full bg-white h-auto bg-cover bg-center bg-fixed flex items-center justify-center"
      aria-label="Chamada para agendamento e informações sobre nossos serviços de beleza e estética"
    >
      <div className="content relative z-10 text-center px-4 py-1 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="lsg digital - logo"
          className="mt-1 w-20 sm:w-28 md:w-36 mx-auto"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-black leading-tight uppercase mb-4">
          Transforme sua Presença Digital Hoje!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 font-medium">
          Descubra soluções inovadoras e acessíveis para o seu negócio de beleza e estética.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 font-semibold">
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
