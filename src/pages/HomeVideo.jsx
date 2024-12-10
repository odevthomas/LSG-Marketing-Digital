import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css'; // Assumindo que você já tenha o arquivo CSS

const HeroSection = () => {
  const navigate = useNavigate();
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('hero-video');
    videoElement.onerror = () => {
      setVideoError(true); // Caso haja erro no carregamento, habilita o fallback
    };
  }, []);

  return (
    <section
      className="hero-section flex flex-col items-center justify-center h-screen text-center p-4 relative"
      aria-label="Seção Principal - Transformação Digital"
    >
      {/* Vídeo de fundo */}
      <video
        id="hero-video"
        autoPlay
        loop
        muted
        className="hero-section-video w-full h-full object-cover absolute inset-0 border-4 shadow-lg"
        aria-label="Vídeo de fundo sobre transformação digital"
      >
        <source src="/videos/abertura.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada para deixar o vídeo mais escuro (mais fosco) */}
      <div className="hero-section-video-overlay"></div>

      {/* Caso o vídeo falhe no carregamento, um fallback será mostrado */}
      {videoError && (
        <div className="hero-section-fallback bg-black w-full h-full flex items-center justify-center absolute inset-0">
          <p className="text-white text-xl font-semibold">
            O vídeo não pôde ser carregado. Por favor, tente novamente mais tarde.
          </p>
        </div>
      )}

      {/* Conteúdo sobre o vídeo */}
      <div className="content relative z-10 text-center px-4 py-8 md:px-12">
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4 shadow-md">
          Transforme sua Presença Digital Hoje!
        </h1>
        <p className="text-lg text-white md:text-xl mb-2">
          Descubra soluções inovadoras e acessíveis para o seu negócio:
        </p>
        <p className="text-md text-white md:text-lg mb-4">
          <span className="text-sm md:text-md ml-2">A partir de </span>
          <span className="price-highlight text-6xl font-semibold text-[#ff8c00]">
            R$ 599/mês
          </span>
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
          <span className="text-lg md:text-xl font-medium mb-2 md:mb-0 md:mr-5 text-white">
            Comece sua Jornada!
          </span>

          {/* Botão */}
          <button
            aria-label="Clique para conhecer os serviços"
            className="inline-flex text-white items-center justify-center gap-x-2 py-3 px-6 text-sm md:text-lg bg-[#ff8c00] hover:bg-[#ff6f00] rounded-full shadow-lg transition-all duration-300 uppercase"
            onClick={() => navigate('/home')}
          >
            QUERO MAIS INFORMAÇÕES
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;