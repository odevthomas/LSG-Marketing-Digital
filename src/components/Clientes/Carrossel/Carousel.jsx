"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import './Carrossel.css';

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
      videoRef.current.play(); 
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-14" style={{ backgroundColor: '#131313' }} aria-labelledby="depoimentos">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-2xl lg:mr-8">
            <motion.h3 
              className="text-[#ffb23e] font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              O que nossos clientes falam sobre nós
            </motion.h3>
            <motion.h2 
              id="depoimentos" 
              className="text-gray-300 text-4xl font-semibold sm:text-5xl mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Satisfação Garantida!
            </motion.h2>
            <motion.p 
              className="mt-3 text-lg mb-4 text-gray-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "No último final de semana, consegui fechar 13 negócios reais!"
            </motion.p>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Descubra como transformamos experiências em histórias de sucesso através dos depoimentos de nossos clientes.
            </motion.p>
          </div>

          <div className="flex-1 lg:flex lg:flex-col lg:items-end">
            <div className="video-player">
              <motion.video 
                ref={videoRef}
                className="video rounded-lg shadow-lg" 
                controls
                preload="metadata"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
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
    </section>
  );
}
