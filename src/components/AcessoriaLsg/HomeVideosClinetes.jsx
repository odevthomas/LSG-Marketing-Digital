import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaMoneyBillAlt, FaShareAlt, FaPlay } from 'react-icons/fa';

export default function VideoTabs() {
  const [activeVideo, setActiveVideo] = useState(null);

  const slides = [
    { 
      link: "/videos/1.mov", 
      content: "Triplicamos Leads em Tempo Recorde!",
      impactPhrase: "Transforme Oportunidades em Resultados",
      description: "Estratégias precisas que geram leads qualificados em tempo recorde.",
      icon: <FaArrowUp className="text-4xl text-[#ff4500]" />
    },
    { 
      link: "/videos/3.mp4", 
      content: "Faturamento 2x Maior em 90 Dias!",
      impactPhrase: "Maximize Suas Vendas",
      description: "Campanhas digitais personalizadas que impulsionam o crescimento.",
      icon: <FaMoneyBillAlt className="text-4xl text-[#ff4500]" />
    },
    { 
      link: "/videos/4.mp4", 
      content: "10x Mais Alcance nas Redes",
      impactPhrase: "Expanda Sua Visibilidade",
      description: "Transformação digital com engajamento e conversão estratégica.",
      icon: <FaShareAlt className="text-4xl text-[#ff4500]" />
    },
  ];

  const handleVideoHover = (index) => {
    setActiveVideo(index);
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Resultados Que Transformam Negócios
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Estratégias de marketing digital que convertem visão em resultados mensuráveis e extraordinários.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0f0f] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => handleVideoHover(index)}
              onHoverEnd={() => setActiveVideo(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <div className="relative h-[500px] overflow-hidden group">
                <video
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeVideo === index ? 'scale-110 blur-sm' : 'scale-100 blur-none'
                  }`}
                  src={slide.link}
                  muted
                  loop
                />
                
                {activeVideo === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <motion.div 
                      className="text-center text-white p-8 max-w-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center mb-6">
                        {slide.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-[#ff4500]">
                        {slide.content}
                      </h3>
                      <p className="text-lg text-gray-200 mb-4 font-semibold">
                        {slide.impactPhrase}
                      </p>
                      <p className="text-sm text-gray-400 mb-6">
                        {slide.description}
                      </p>
                      <button className="mx-auto flex items-center justify-center bg-[#ff4500] text-white px-8 py-3 rounded-full text-base hover:bg-[#ff6347] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <FaPlay className="mr-3" /> Ver Caso de Sucesso
                      </button>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Efeito de gradiente decorativo */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#ff4500]/20 to-transparent blur-3xl opacity-30"></div>
      </div>
    </motion.section>
  );
}
