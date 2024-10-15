import { Button } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 relative hero-background">
      <video autoPlay loop muted className="video-background">
        <source src="/img/teste.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Transforme sua Presença Digital Hoje!</h1>
      <p className="text-base md:text-lg mb-2 text-white">Descubra soluções inovadoras e acessíveis para o seu negócio:</p>
      <p className="text-sm md:text-md mb-4">
        <span className="price-highlight mt-9">R$ 599/mês</span>
        <span className="text-xs md:text-sm ml-2  text-white">Clique no botão e comece sua jornada!</span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4" style={{ zIndex: 2 }}>
        <span className="text-base md:text-lg font-medium mb-2 md:mb-0 md:mr-4 service-highlight">Explore nossos serviços!</span>
        <Button 
          auto 
          color="warning"
          onClick={() => navigate('/home')} 
          className="ml-0 md:ml-4 hero-button"
        >
          Conheça
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
