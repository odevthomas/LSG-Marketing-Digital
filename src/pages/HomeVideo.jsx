import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center p-4 hero-background"
      aria-label="Seção Principal - Transformação Digital"
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Vídeo de fundo mostrando transformação digital"
        preload="auto"
      >
        <source src="/videos/abertura1.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Camada de sobreposição */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Texto principal sobre o vídeo */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Transforme sua Presença Digital Hoje!
        </h1>
        <p className="text-base text-white md:text-lg mb-2">
          Descubra soluções inovadoras e acessíveis para o seu negócio:
        </p>
        <p className="text-sm text-white md:text-md mb-4">
          <span className="text-xs md:text-sm ml-2">A partir de </span>
          <span className="price-highlight text-5xl font-semibold text-green-500">
            R$ 599/mês
          </span>
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
          <span className="text-base md:text-lg font-medium mb-2 md:mb-0 md:mr-5">
            Comece sua Jornada!
          </span>

          {/* Botão */}
          <button
            aria-label="Clique para conhecer os serviços"
            className="px-8 py-3 text-white font-bold text-lg md:text-xl rounded-full shadow-lg transition-transform transform bg-green-500 border-2 border-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 focus:outline-none duration-300 ease-in-out"
            id="startButton"
            onClick={() => navigate('/home')} // Ação para navegar
          >
            CLIQUE E CONHEÇA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
