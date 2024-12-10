"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const SectionResultados = () => {
  const images = [
    "/outs/5.png",
    "/outs/7.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 18000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      style={{ backgroundImage: "url('/img/HeroResultados.jpeg')" }}
      aria-labelledby="testimonials"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#f46d40] to-[#000] opacity-90"></div>

      <div className="relative w-full px-4 md:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 w-full text-center">
          <div className="max-w-2xl px-4 mt-6 lg:max-w-2xl w-full">
            <motion.h3
              className="text-[#f4f4f4] font-semibold mb-4 text-lg sm:text-xl"
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
              RESULTADOS{" "}
              <span className="text-[#f4f4f4]">SURPREENDENTES</span>
            </motion.p>

            <motion.p
              className="mt-4 mb-4 text-white text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham experiências que demonstram a eficácia de nossas soluções inovadoras.
            </motion.p>

            <div className="flex justify-center mt-6">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=5519981331191&text=Ola quero saber como funciona"
                className="inline-flex items-center justify-center gap-x-2 py-4 px-8 text-white bg-[#f46d40] hover:bg-[#e57c3a] rounded-lg shadow-lg transition-all duration-300 uppercase"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-label="Descubra mais"
              >
                Converse com um Especialista
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

          <div className="w-full lg:flex-1 overflow-x-hidden mt-6 lg:mt-0">
            <motion.div
              className="flex gap-x-2 w-full"
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
                    className="rounded-lg object-cover w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[400px] shadow-lg"
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