import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRegLightbulb, FaCode, FaStar } from "react-icons/fa";
import "swiper/swiper-bundle.css";

const SeloSection = () => {
  const icons = [
    { icon: <FaCheckCircle className="text-5xl text-green-500" />, label: "Garantia de Qualidade" },
    { icon: <FaRegLightbulb className="text-5xl text-yellow-500" />, label: "Inovação Contínua" },
    { icon: <FaCode className="text-5xl text-blue-500" />, label: "Soluções Tecnológicas" },
    { icon: <FaStar className="text-5xl text-purple-500" />, label: "Excelência Reconhecida" },
  ];

  return (
    <section id="Servicos" className="py-16 bg-gradient-to-b from-[#1a1a1a] to-[#333333] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Garantia de Excelência e Compromisso com a Qualidade
        </motion.h3>

        <motion.p
          className="text-[#fff] text-lg mt-10 sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Na LSG Digital, nossa garantia de qualidade é o alicerce de tudo o que fazemos. Estamos empenhados em oferecer soluções digitais inovadoras que atendem e superam suas necessidades.
        </motion.p>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {icons.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center justify-center p-6 transition duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-4">
                  {item.icon}
                </div>
                <p className="text-lg font-semibold text-gray-300">{item.label}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8">
          {icons.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${index === 0 ? "bg-[#a3a3a3]" : "bg-gray-400"}`}
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