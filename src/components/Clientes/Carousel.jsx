"use client";

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Testimonial from './Testimonial';
import './styles/Carrossel.css';

export default function VideoPlayer() {
  const slides = [
    { link: "/depoimentos/1.mov", content: "Depoimento 1" },
    { link: "/depoimentos/3.mp4", content: "Depoimento 2" },
    { link: "/depoimentos/4.mp4", content: "Depoimento 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = slides[activeIndex].link; 
      videoRef.current.load(); 
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-14 bg-white" aria-labelledby="depoimentos">
      <div className="max-w-screen-xl mx-auto px-4 text-[#010101] md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="max-w-2xl lg:mr-8 mb-8 lg:mb-0">
            <motion.h3 
              className="text-[#333] font-semibold mb-4 text-lg sm:text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              O que nossos clientes falam sobre nós
            </motion.h3>
            <motion.h2 
              id="depoimentos" 
              className="text-[#212121] text-6xl sm:text-4xl font-extrabold mb-6 mt-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nossos Clientes Satisfeitos!
            </motion.h2>

            <motion.p 
              className="mt-4 mb-6 text-lg text-[#212121] text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "No último final de semana, consegui fechar 13 negócios reais!"
            </motion.p>
            <motion.p 
              className="mb-6 text-[#212121] text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Descubra como transformamos experiências em histórias de sucesso através dos depoimentos de nossos clientes.
            </motion.p>
            
            <div className="text-center mt-6">
              <button 
                className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-300"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações.', '_blank')}
              >
                Fale Conosco no WhatsApp
              </button>
            </div>
          </div>

          <div className="flex-1 lg:flex lg:flex-col lg:items-end">
            <div className="video-player">
              <motion.video 
                ref={videoRef}
                className="video rounded-lg shadow-lg w-full h-auto"
                controls
                preload="metadata"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                aria-label="Video de depoimento"
              >
                <source src={slides[activeIndex].link} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </motion.video>
              <div className="controls flex justify-center mt-4">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`dot ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
}
