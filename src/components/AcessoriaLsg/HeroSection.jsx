import React, { useEffect, useState } from 'react';
import logo from '/logo-novas-lsg.png'; // Importe sua logo
import { FaWhatsapp } from 'react-icons/fa'; // Certifique-se de ter o react-icons instalado

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [buttonText, setButtonText] = useState('Transforme sua vida com um clique!');

  const handleMouseEnter = () => {
    setButtonText('Fale conosco e comece sua transformação agora!');
  };

  const handleMouseLeave = () => {
    setButtonText('Transforme sua vida com um clique!');
  };

  const message = "Olá! Vi seu site e estou interessado em descobrir mais sobre seus serviços. Poderia me ajudar?";
  const whatsappNumber = "5519981331191";

  useEffect(() => {
    const videoElement = document.getElementById('hero-video');
    
    if (videoElement) {
      videoElement.onerror = () => {
        setVideoError(true); // Caso haja erro no carregamento, habilita o fallback
      };
    }

    return () => {
      if (videoElement) {
        videoElement.onerror = null; // Remove o manipulador de erro
      }
    };
  }, []);

  return (
    <section
      className="relative py-10 w-full bg-white h-auto bg-cover bg-center bg-fixed flex items-center justify-center"
      aria-label="Chamada para agendamento e informações sobre nossos serviços de beleza e estética"
    >
      <div className="hero-section-video-overlay bg-white bg-opacity-75 absolute inset-0"></div>

      {videoError && (
        <div className="hero-section-fallback bg-black w-full h-full flex items-center justify-center absolute inset-0">
          <p className="text-black text-xl font-semibold">
            O vídeo não pôde ser carregado. Por favor, tente novamente mais tarde.
          </p>
        </div>
      )}

      <div className="content relative z-10 text-center px-6 py-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logo da Casa L'Ellit - Salão de Beleza e Estética"
          className="mb-4 w-24 sm:w-32 md:w-40 mx-auto"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-black leading-tight uppercase mb-3">
          Transforme sua Presença Digital Hoje!
        </h1>

        <p className="text-base sm:text-lg text-black mb-3 font-medium">
          Descubra soluções inovadoras e acessíveis para o seu negócio de beleza e estética.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-4 font-semibold">
          <span className="text-sm sm:text-base md:text-lg ml-2">A partir de </span>
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
            <FaWhatsapp className="inline-block mr-2 text-2xl" />
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
