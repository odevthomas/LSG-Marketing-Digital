"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import FloatingWhatsApp from "../Buttons/FloatingWhatsApp"; // Corrigido

const SectionResultados = () => {
  // Lista de imagens com clientes
  const images = [
    "/outs/5.png", // Imagens de clientes no diretório 'public/outs'
    "/outs/7.png",
  ];

  // Estado para controlar qual imagem está ativa
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Intervalo para alterar a imagem a cada 7 segundos
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 18000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.section
      className="py-32 bg-cover bg-center relative w-full"
      style={{
        backgroundImage: "url('/img/HeroResultados.jpeg')", // Certifique-se de que o caminho da imagem está correto
      }}
      aria-labelledby="testimonials"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative max-w-screen-xl mx-auto md:px-8 z-40 w-full px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12 w-full">
          {/* Texto do depoimento */}
          <div className="text-center lg:text-left max-w-xl px-4 space-y-5 mt-6 lg:max-w-2xl w-full">
            <motion.h3
              className="text-white font-semibold mb-4 text-lg sm:text-xl"
              initial={{ opacity: 0, y: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              O que nossos clientes dizem
            </motion.h3>

            <motion.p
              className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              CLIENTES COM RESULTADOS SURPREENDENTES
            </motion.p>

            <motion.p
              className="mt-3 text-lg mb-4 text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham suas experiências e a eficácia de nossas soluções inovadoras.
            </motion.p>

            {/* Call to Action - Botão para novo link */}
            <div className="flex justify-center lg:justify-start mt-6">
              <motion.a
                href="https://novolink.com"  // Aqui você pode trocar pelo novo link desejado
                className="inline-flex items-center justify-center gap-x-2 py-4 px-8 text-black  bg-[#fff] hover:bg-[#1DA65D] rounded-lg shadow-lg transition-all duration-300 uppercase"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-label="Descubra mais"
              >
                Converse com Especiaista
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Carrossel de imagens - Horizontal */}
          <div className="w-full lg:flex-1 overflow-x-hidden mt-6 lg:mt-0">
            <motion.div
              className="flex gap-x-8 w-full"
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 ${index === activeIndex ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Depoimento do cliente ${index + 1}`}
                    className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] shadow-lg" // Imagens com altura responsiva
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionResultados;
