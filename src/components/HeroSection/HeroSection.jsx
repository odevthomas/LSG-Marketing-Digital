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
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Transforme sua Presença Digital Hoje!</h1>
      <p className="text-base md:text-lg mb-2 text-white">Descubra soluções inovadoras e acessíveis para o seu negócio:</p>
      <p className="text-sm md:text-md mb-4">
        <span className="price-highlight mt-9">R$ 599/mês</span>
        <span className="text-xs md:text-sm ml-2 text-white">Clique no botão e comece sua jornada!</span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4" style={{ zIndex: 2 }}>
        <span className="text-base md:text-lg font-medium mb-2 md:mb-0 md:mr-9 service-highlight">Explore nossos serviços!</span>
        <Button 
          onClick={() => navigate('/home')} 
          className="hero-button"
        >
          Clique e Conheça  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
