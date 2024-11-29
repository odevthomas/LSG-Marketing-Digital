"use client";

import React, { useState } from 'react';
import FloatingWhatsApp from '../Buttons/FloatingWhatsApp'; // Ajuste o caminho conforme necessário

export default function VideoPlayer() {
  const slides = [
    { link: "/videos/1.mov", content: "Depoimento 1" },
    { link: "/videos/3.mp4", content: "Depoimento 2" },
    { link: "/videos/4.mp4", content: "Depoimento 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Função para mudar o vídeo ao clicar nas bolinhas
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="section-with-background">
        <div className="content-wrapper">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="relative">
              <div className="max-w-3xl text-center mx-auto">
                <h1 className="mt-2 block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Histórias de Sucesso com a LSG Digital
                </h1>
                <p className="mt-2 text-white">
                  O sucesso dos nossos clientes é o que nos motiva. Não acreditamos apenas em números, mas em histórias reais de empresas que transformaram suas operações e alcançaram resultados extraordinários.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              {/* Coluna de Texto */}
              <div id="clientes" className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl sm:text-3xl text-gray-100 font-bold dark:text-neutral-200">
                  Resultados Reais, Clientes Satisfeitos
                </h2>
                <p className="mt-2 text-gray-100 dark:text-neutral-500">
                  Confira o que nossos clientes têm a dizer sobre a experiência com a nossa equipe e como nossas soluções de marketing digital ajudaram a alavancar os negócios deles.
                </p>

                {/* Navegação das Abas */}
                <nav className="grid gap-6 mt-6 md:mt-10" aria-label="Depoimentos de Clientes" role="tablist" aria-orientation="vertical">
                  {/* Aba 1: Aumento nas Vendas */}
                  <button
                    type="button"
                    className="tab-button text-start hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-800 focus:ring-opacity-50 p-5 md:p-6 rounded-xl transition-all duration-300 ease-in-out"
                    onClick={() => handleDotClick(0)}
                  >
                    <span className="grow">
                      <span className="block text-lg font-semibold text-gray-800 hover:text--600 transition-all duration-300 ease-in-out">
                        Aumento nas Vendas
                      </span>
                      <span className="block mt-1 text-gray-200">
                        Ajudamos nossos clientes a melhorar suas vendas através de estratégias eficazes de marketing digital.
                      </span>
                    </span>
                  </button>

                  {/* Aba 2: Satisfação e Reconhecimento */}
                  <button
                    type="button"
                    className="tab-button text-start hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-800 focus:ring-opacity-50 p-5 md:p-6 rounded-x transition-all duration-300 ease-in-out"
                    onClick={() => handleDotClick(1)}
                  >
                    <span className="grow">
                      <span className="block text-lg font-semibold text-gray-800 hover:text--600 transition-all duration-300 ease-in-out">
                        Satisfação e Reconhecimento
                      </span>
                      <span className="block mt-1 text-gray-200">
                        Clientes satisfeitos são nosso maior reconhecimento. Veja como conseguimos transformar negócios.
                      </span>
                    </span>
                  </button>

                  {/* Aba 3: Gestão de Tráfego Pago */}
                  <button
                    type="button"
                    className="tab-button text-start hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-800 focus:ring-opacity-50 p-5 md:p-6 rounded-x transition-all duration-300 ease-in-out"
                    onClick={() => handleDotClick(2)}
                  >
                    <span className="grow">
                      <span className="block text-lg font-semibold text-gray-800 hover:text--600 transition-all duration-300 ease-in-out">
                        Gestão de Tráfego Pago
                      </span>
                      <span className="block mt-1 text-gray-100">
                        A estratégia de tráfego pago foi a chave para o sucesso de muitos de nossos clientes.
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              {/* Coluna de Vídeos */}
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Conteúdo das Abas */}
                  <div>
                    {/* Aba 1 */}
                    <div className={`video-tab ${activeIndex === 0 ? 'block' : 'hidden'}`} role="tabpanel">
                      <video className="rounded-xl w-full" controls>
                        <source src={slides[0].link} type="video/mp4" />
                        Seu navegador não suporta o vídeo.
                      </video>
                    </div>

                    {/* Aba 2 */}
                    <div className={`video-tab ${activeIndex === 1 ? 'block' : 'hidden'}`} role="tabpanel">
                      <video className="shadow-xl shadow-gray-200 rounded-xl w-full" controls>
                        <source src={slides[1].link} type="video/mp4" />
                        Seu navegador não suporta o vídeo.
                      </video>
                    </div>

                    {/* Aba 3 */}
                    <div className={`video-tab ${activeIndex === 2 ? 'block' : 'hidden'}`} role="tabpanel">
                      <video className="shadow-xl shadow-gray-200 rounded-xl w-full" controls>
                        <source src={slides[2].link} type="video/mp4" />
                        Seu navegador não suporta o vídeo.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sobreposição de fundo */}
            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-8 lg:col-start-6 bg-gray-900 w-full h-5/4 sm:h-3/4 lg:h-full opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão Flutuante WhatsApp (Componente Importado) */}
      <FloatingWhatsApp />
      
    </>
  );
}
