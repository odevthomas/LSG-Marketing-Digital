import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRegLightbulb, FaCode, FaStar, FaBullhorn, FaTools, FaChartLine, FaThumbsUp } from "react-icons/fa";
import "swiper/swiper-bundle.css";

const SeloSection = () => {
  const icons = [
    { 
      icon: <FaCheckCircle className="text-4xl text-[#f11414]" />, 
      label: "Garantia de Qualidade", 
      description: "A LSG Digital garante que todas as soluções são feitas com rigorosos padrões de qualidade."
    },
    { 
      icon: <FaRegLightbulb className="text-4xl text-[#f11414]" />, 
      label: "Inovação Contínua", 
      description: "Estamos sempre à frente com inovações tecnológicas para atender às suas necessidades."
    },
    { 
      icon: <FaCode className="text-4xl text-[#f11414]" />, 
      label: "Soluções Tecnológicas", 
      description: "Desenvolvemos soluções avançadas para otimizar seu desempenho digital."
    },
    { 
      icon: <FaStar className="text-4xl text-[#f11414]" />, 
      label: "Excelência Reconhecida", 
      description: "Nossa excelência é comprovada por prêmios e reconhecimentos no setor digital."
    },
    { 
      icon: <FaBullhorn className="text-4xl text-[#f11414]" />, 
      label: "Marketing de Impacto", 
      description: "Criação de campanhas de marketing impactantes para aumentar sua visibilidade."
    },
    { 
      icon: <FaTools className="text-4xl text-[#f11414]" />, 
      label: "Suporte Total", 
      description: "Oferecemos suporte contínuo para garantir que sua plataforma funcione perfeitamente."
    },
    { 
      icon: <FaChartLine className="text-4xl text-[#f11414]" />, 
      label: "Resultados Mensuráveis", 
      description: "Analisamos seus dados para garantir que você alcance os melhores resultados possíveis."
    },
    { 
      icon: <FaThumbsUp className="text-4xl text-[#f11414]" />, 
      label: "Satisfação Garantida", 
      description: "Nosso objetivo é sempre a satisfação total de nossos clientes e parceiros."
    },
  ];

  return (
    <section id="Servicos" className="py-8 sm:py-12 bg-[#000] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          className="mt-2 block font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Garantia de Excelência e Compromisso com a Qualidade
        </motion.h3>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Na LSG Digital, nossa garantia de qualidade é o alicerce de tudo o que fazemos. Estamos empenhados em oferecer soluções digitais inovadoras que atendem e superam suas necessidades.
        </motion.p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {icons.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out bg-[#222] rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }} // Efeito de aumento ao passar o mouse
              >
                <div className="text-center mb-4">
                  {item.icon}
                </div>
                <p className="text-lg font-semibold text-white mb-2">{item.label}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Indicadores de navegação (estilizados) */}
        <div className="flex justify-center gap-4 mt-8">
          {icons.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${index === 0 ? "bg-[#898989]" : "bg-gray-400"}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeloSection;