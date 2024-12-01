import React, { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Ícone de play da biblioteca react-icons
import { motion } from "framer-motion"; // Importação do motion
import FloatingWhatsAppComponent from '../Buttons/FloatingWhatsApp'; // Caminho do componente


export default function VideoTabs() {
  const [activeTab, setActiveTab] = useState(0); // Estado para controle da aba ativa

  const slides = [
    { link: "/videos/1.mov", content: "Depoimento 1" },
    { link: "/videos/3.mp4", content: "Depoimento 2" },
    { link: "/videos/4.mp4", content: "Depoimento 3" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index); // Atualiza a aba ativa
  };

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      style={{
        backgroundImage: "url('/img/fundo-slide.jpeg')", // Certifique-se de que o caminho da imagem está correto
      }}
      aria-labelledby="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay para o fundo escuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
        <div className="relative p-6 md:p-16">
          <div className="relative lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Coluna de Texto */}
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h1 className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white shadow-md shadow-black">
                Histórias de {" "}
                <span className="text-[#81ff94]">Sucesso</span>
              </h1>
              <p className="mt-2 text-white text-lg sm:text-xl md:text-2xl leading-relaxed shadow-md shadow-black">
                O sucesso dos nossos clientes é o que nos motiva. Não acreditamos apenas em números, mas em histórias reais de empresas que transformaram suas operações e alcançaram resultados extraordinários.
              </p>
              {/* Navegação das Abas */}
              <nav
                className="grid gap-4 mt-5 md:mt-10 text-white"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`flex items-center gap-3 hover:bg-[#81ff94] focus:outline-none focus:bg-[#81ff94] p-4 md:p-5 rounded-xl transition-all duration-300 ease-in-out ${
                      activeTab === index ? "bg-[#00a859] shadow-lg" : "bg-[#2d2d2d]"
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {/* Ícone Play */}
                    <FaPlay className="text-white text-lg" />
                    <span className="text-white font-medium">
                      Assista ao {slide.content}
                    </span>
                  </button>
                ))}
              </nav>
              {/* Fim Navegação das Abas */}
            </div>
            {/* Fim Coluna de Texto */}

            {/* Coluna de Vídeos */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Conteúdo das Abas */}
                <div>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`tab-content ${activeTab === index ? "block" : "hidden"}`}
                      id={`tab-content-${index}`}
                      role="tabpanel"
                      aria-labelledby={`tabs-item-${index}`}
                    >
                      <video className="shadow-xl rounded-xl w-full" controls>
                        <source src={slide.link} type="video/mp4" />
                        Seu navegador não suporta o vídeo.
                      </video>
                    </div>
                  ))}
                </div>
                {/* Fim Conteúdo das Abas */}
              </div>
            </div>
            {/* Fim Coluna de Vídeos */}
          </div>
        </div>
      </div>
          <FloatingWhatsAppComponent />

    </motion.section>
  );
}
