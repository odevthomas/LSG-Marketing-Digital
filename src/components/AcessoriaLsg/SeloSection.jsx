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
import "swiper/swiper-bundle.css";

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

  return (
    <section className="bg-black py-20 text-white overflow-hidden relative">
      {/* Efeito de fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#222] opacity-80 pointer-events-none"></div>

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

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {icons.map((item, index) => (
            <SwiperSlide key={index} className="pb-12">
              <motion.div 
                className="group bg-[#111] border border-[#222] rounded-3xl p-10 text-center 
                           transform transition-all duration-300 
                           hover:scale-105 hover:shadow-2xl hover:border-[#ff4500]
                           relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Efeito de borda gradiente */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#ff4500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-lg"></div>

                <div className="flex justify-center mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.label}</h3>
                <p className="text-gray-400 relative z-10">{item.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SeloSection;