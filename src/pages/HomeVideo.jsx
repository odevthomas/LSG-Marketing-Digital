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
        preload="auto" // Garantir o carregamento automático do vídeo
        poster="/Capturar.PNG" // Imagem de fallback enquanto o vídeo carrega
      >
        <source src="/abertura1.mp4" type="video/mp4" />
        {/* Texto alternativo para navegadores que não suportam vídeo */}
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
          <span className="price-highlight text-5xl font-semibold text-[#81ff94]">
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
            className="pinline-flex items-center justify-center gap-x-2 py-4 px-8 text-black bg-[#81ff94] hover:bg-[#1DA65D] rounded-full hover:text-black shadow-lg transition-all duration-300 uppercase"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="startButton"
            onClick={() => navigate('/home')} // Ação para navegar
          >
            Clique e Conheça 
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
