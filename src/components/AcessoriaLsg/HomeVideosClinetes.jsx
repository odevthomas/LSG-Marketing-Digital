import React from "react";
import { motion } from "framer-motion"; // Importação do motion
import { FaArrowUp, FaMoneyBillAlt, FaShareAlt } from 'react-icons/fa';

export default function VideoTabs() {
  const slides = [
    { 
      link: "/videos/1.mov", 
      content: "Triplicamos Leads em Tempo Recorde!",
      impactPhrase: "Transforme Oportunidades em Resultados Concretos",
      description: "Em apenas 3 meses, conseguimos aumentar significativamente os leads qualificados, aplicando estratégias certeiras e ações rápidas que geram resultados visíveis e tangíveis.",
      icon: <FaArrowUp className="text-5xl text-[#fb1603]" />  // Ícone com cor mais vibrante
    },
    { 
      link: "/videos/3.mp4", 
      content: "Faturamento 2x Maior em Menos de 90 Dias!",
      impactPhrase: "Maximize Suas Vendas com Estratégias de Alta Performance",
      description: "Dobrar o faturamento em menos de 90 dias é possível! Aumentamos as vendas de nossos clientes através de campanhas digitais personalizadas, levando-os a resultados surpreendentes.",
      icon: <FaMoneyBillAlt className="text-5xl text-[#fb1603]" />  // Ícone verde para simbolizar dinheiro
    },
    { 
      link: "/videos/4.mp4", 
      content: "10x Mais Alcance nas Redes Sociais!",
      impactPhrase: "Expanda Sua Visibilidade e Conquiste Novos Clientes",
      description: "Transformamos as redes sociais de nossos clientes, aumentando o alcance em 10x e gerando um engajamento altamente eficaz, convertendo seguidores em clientes fiéis e comprometidos.",
      icon: <FaShareAlt className="text-5xl text-[#fb1603]" />  // Ícone azul para simbolizar compartilhamento
    },
  ];

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      aria-labelledby="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000000b9] to-[#4848483b] opacity-90"></div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-14 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wider text-white leading-tight uppercase mb-4">
            Transformamos Cliques em Resultados Reais
          </h2>
          <p className="mt-2 text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
            Resultados Imediatos. Impacto Sustentável.
          </p>
          <p className="mt-2 text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
            Descubra Como Impulsionamos o Sucesso Tangível de Nossos Clientes.
          </p>
        </div>

        {/* Coluna de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slides.map((slide, index) => (
            <article
              key={index}
              className="relative flex flex-col items-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Contêiner de vídeo com efeito hover */}
              <div className="relative w-full h-[450px] sm:h-[350px] md:h-[500px] bg-cover rounded-lg cursor-pointer">
                <video
                  className="w-full h-full object-cover rounded-lg opacity-100 transition-opacity duration-300"
                  controls
                  aria-label={`Depoimento sobre ${slide.content}`}
                  alt={`Vídeo de cliente com impacto: ${slide.impactPhrase}`}
                >
                  <source src={slide.link} type="video/mp4" />
                  Seu navegador não suporta o vídeo.
                </video>
                
                {/* Texto sobre o vídeo */}
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div>
                    {/* Ícone centralizado */}
                    <div className="flex justify-center mb-4">
                      {slide.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{slide.content}</h3>
                    <p className="mt-2 text-lg font-semibold">{slide.impactPhrase}</p>
                    <p className="mt-4 text-md font-light">{slide.description}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Fim Coluna de Vídeos */}
      </div>
    </motion.section>
  );
}
