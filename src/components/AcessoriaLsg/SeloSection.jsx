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

const CardContent = ({ item }) => (
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
        <div className="relative group-hover:scale-110 transition-transform duration-500">
          {item.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 
                     group-hover:text-[#f11414] transition-colors duration-300">
        {item.label}
      </h3>
      
      <p className="text-sm text-gray-400 
                   group-hover:text-gray-300 transition-colors duration-300">
        {item.description}
      </p>
    </div>
  </motion.div>
);

const SeloSection = () => {
  const icons = [
    { 
      icon: <FaRocket className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Crescimento Acelerado", 
      description: "Estratégias digitais que impulsionam seu negócio em velocidade máxima."
    },
    { 
      icon: <FaChartLine className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Resultados Mensuráveis", 
      description: "Análise de dados precisos para decisões estratégicas inteligentes."
    },
    { 
      icon: <FaBullhorn className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Marketing Disruptivo", 
      description: "Campanhas inovadoras que quebram barreiras e conquistam audiências."
    },
    { 
      icon: <FaCode className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Soluções Tecnológicas", 
      description: "Desenvolvimento de sistemas e aplicações de ponta."
    },
    { 
      icon: <FaLightbulb className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Inovação Estratégica", 
      description: "Transformando ideias em soluções digitais revolucionárias."
    },
    { 
      icon: <FaGlobeAmericas className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Alcance Global", 
      description: "Estratégias que transcendem fronteiras e conectam mercados."
    },
    { 
      icon: <FaNetworkWired className="text-6xl text-[#ff4500] transition-all duration-300 group-hover:scale-110" />, 
      label: "Ecossistema Digital", 
      description: "Integração completa de tecnologias para máxima eficiência."
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
      {/* Efeito de fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000] to-[#111] opacity-90 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transformação Digital Sob Medida
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Desenvolvemos estratégias digitais personalizadas que elevam sua marca, combinando tecnologia de ponta, criatividade e resultados mensuráveis.
        </motion.p>

        {/* Primeiro Carrossel - Da esquerda para direita */}
        <div className="mb-8 relative">
          <Swiper {...swiperParams} className="selo-slider">
            {icons.map((item, index) => (
              <SwiperSlide key={`slide1-${index}`} className="w-auto">
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Segundo Carrossel - Da direita para esquerda */}
        <div className="relative">
          <Swiper {...swiperParamsReverse} className="selo-slider">
            {[...icons].reverse().map((item, index) => (
              <SwiperSlide key={`slide2-${index}`} className="w-auto">
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SeloSection;