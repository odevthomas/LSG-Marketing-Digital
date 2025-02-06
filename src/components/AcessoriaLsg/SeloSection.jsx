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
import { ArrowRight } from "lucide-react";

const CardContent = ({ item }) => (
  <motion.div 
    className="group bg-[#111] border border-[#222] rounded-3xl p-8 text-center w-[300px]
               transform transition-all duration-500 mx-2 relative overflow-hidden
               hover:scale-105 hover:bg-black
               hover:border-[#f11414]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Efeito de brilho - mantido como estava */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-[#ff450015] to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
    </div>

    {/* Conteúdo */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-center mb-4">
        <div className="relative p-6 rounded-full bg-[#ffffff08] group-hover:bg-[#ffffff0f] transition-all duration-500
                      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#ff450015] before:to-transparent before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500">
          {item.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 
                     group-hover:text-[#f11414] transition-colors duration-300">
        {item.label}
      </h3>
      
      <p className="text-sm text-gray-400 mb-6
                   group-hover:text-gray-300 transition-colors duration-300">
        {item.description}
      </p>

      {/* Novo Botão */}
      <div className="mt-auto">
        <button className="group/btn relative inline-flex items-center justify-center gap-2 
                         py-3 px-6 
                         text-sm font-medium text-white
                         bg-gradient-to-r from-[#f11414] to-[#ff4500]
                         rounded-full overflow-hidden
                         transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(241,20,20,0.3)]
                         focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-offset-2 focus:ring-offset-[#111]">
          <span className="relative z-10">
            Saiba mais
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 
                                group-hover/btn:translate-x-1" />
          
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform rotate-45 translate-x-full group-hover/btn:translate-x-[-200%] 
                          transition-transform duration-1000"></div>
          </div>
        </button>
      </div>
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
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { 
        slidesPerView: 2,
        spaceBetween: 40
      },
      768: { 
        slidesPerView: 3,
        spaceBetween: 40
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  };

  return (
    <section className="bg-black py-20 text-white overflow-hidden relative">
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

        <div className="max-w-7xl mx-auto px-4">
          <Swiper {...swiperParams} className="selo-slider py-4">
            {icons.map((item, index) => (
              <SwiperSlide key={`slide-${index}`} className="px-2">
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