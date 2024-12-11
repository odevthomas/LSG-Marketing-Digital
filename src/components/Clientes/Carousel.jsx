import React from "react";
import { motion } from "framer-motion"; // Importação do motion
import Avaliacao from "../Clientes/ClientSection";

export default function VideoTabs() {
  const slides = [
    { link: "/videos/1.mov", content: "Depoimento 1", impactPhrase: "Triplicamos os leads em 3 meses!" },
    { link: "/videos/3.mp4", content: "Depoimento 2", impactPhrase: "Dobrou o faturamento nos contratos online!" },
    { link: "/videos/4.mp4", content: "Depoimento 3", impactPhrase: "10x mais alcance nas redes sociais!" },
  ];

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      style={{
        backgroundImage: "url('/img/fundo-slide.jpeg')",
      }}
      aria-labelledby="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#fb1603] to-[#000] opacity-90"></div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
        <div className="relative p-6 md:p-16">
          <div className="relative lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Coluna de Texto */}
            <header className="mb-10 lg:mb-0 lg:col-span-12 text-center">
              <h1 className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Transformamos Cliques em Clientes{" "}
                <span className="text-[#f7f7f7]"> - Confira os Resultados Reais!</span>
              </h1>
              <p className="mt-2 text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                Quem Confia na LSG Digital Recomenda.
              </p>
            </header>
            {/* Fim Coluna de Texto */}

            {/* Coluna de Vídeos */}
            <div className="lg:col-span-12 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {slides.map((slide, index) => (
                <article key={index} className="relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
                  <video
                    className="w-full h-196 object-cover"
                    controls
                    aria-label={`Depoimento sobre ${slide.content}`}
                    alt={`Vídeo de cliente com impacto: ${slide.impactPhrase}`}
                  >
                    <source src={slide.link} type="video/mp4" />
                    Seu navegador não suporta o vídeo.
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#333] text-white text-lg font-bold text-center py-3">
                    {slide.impactPhrase}
                  </div>
                </article>
              ))}
            </div>
            {/* Fim Coluna de Vídeos */}
          </div>
        </div>
      </div>
      <Avaliacao />
    </motion.section>
  );
}
