import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaChartLine, 
  FaBullhorn, 
  FaCode, 
  FaLightbulb, 
  FaGlobeAmericas,
  FaNetworkWired
} from "react-icons/fa";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ClientCard = ({ client }) => (
  <motion.div 
    className="group bg-[#111] border border-[#222] rounded-3xl p-8 text-center w-[300px]
               transform transition-all duration-500 mx-2
               hover:scale-105 hover:bg-black
               hover:shadow-[0_0_50px_rgba(241,20,20,0.15)]
               hover:border-[#f11414]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Efeito de brilho */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f11414]/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-lg">
    </div>
    
    {/* Conteúdo */}
    <div className="relative z-10">
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-500">
          <img 
            src={client.imgSrc} 
            alt={client.name}
            className="w-full h-full rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 
                     group-hover:text-[#f11414] transition-colors duration-300">
        {client.name}
      </h3>
      
      <p className="text-sm text-gray-400 
                   group-hover:text-gray-300 transition-colors duration-300">
        {client.description}
      </p>
    </div>
  </motion.div>
);

const ClientesParceiros = () => {
  const clients = [
    {
      imgSrc: "/ImgInstagram/royalpalmplazaresort.jpg",
      name: "Royal Palm Plaza Resort",
      description: "Resort & Hospitalidade"
    },
    {
      imgSrc: "/ImgInstagram/luizgoncalvesconnection.jpg",
      name: "Luiz Gonçalves Connection",
      description: "Consultoria em Conexões Digitais"
    },
    {
      imgSrc: "/ImgInstagram/novo_olhar_revelesuabeleza.jpg",
      name: "Novo Olhar",
      description: "Beleza e Transformação Visual"
    },
    {
      imgSrc: "/ImgInstagram/dconceptbr.jpg",
      name: "DConcept BR",
      description: "Design e Consultoria de Branding"
    },
    {
      imgSrc: "/ImgInstagram/casavrsalao.jpg",
      name: "Casa VR Salão",
      description: "Beleza e Estilo para Todos"
    }
  ];

  const swiperParams = {
    modules: [Autoplay],
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: "auto" },
      1024: { slidesPerView: "auto" },
    }
  };

  const swiperParamsReverse = {
    ...swiperParams,
    autoplay: {
      ...swiperParams.autoplay,
      reverseDirection: true
    }
  };

  return (
    <section className="bg-black py-20 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000] to-[#111] opacity-90 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nossos Parceiros
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Empresas que confiam em nosso trabalho para impulsionar sua presença digital
        </motion.p>

        {/* Primeiro Carrossel */}
        <div className="mb-8 relative">
          <Swiper {...swiperParams} className="parceiros-slider">
            {clients.map((client, index) => (
              <SwiperSlide key={`slide1-${index}`} className="w-auto">
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Segundo Carrossel */}
        <div className="relative">
          <Swiper {...swiperParamsReverse} className="parceiros-slider">
            {[...clients].reverse().map((client, index) => (
              <SwiperSlide key={`slide2-${index}`} className="w-auto">
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientesParceiros;
