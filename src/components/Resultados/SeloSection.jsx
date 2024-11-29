"use client";
import { motion } from "framer-motion";
import React from "react";

const SeloSection = () => {
  const image = "/public/img/selo2.png"; // Substitua pelo caminho da sua imagem

  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 gap-8">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <motion.h2
            className="text-2xl font-bold text-gray-900 md:text-3xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Garantia de Satisfação
          </motion.h2>

          <motion.p
            className="hidden text-gray-500 md:mt-4 md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Estamos tão confiantes na qualidade e eficácia do nosso trabalho que oferecemos uma garantia de satisfação!
          </motion.p>

          <motion.p
            className="mt-4 text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Se, após nossa mentoria ou serviço, você não estiver satisfeito com os resultados ou o direcionamento, vamos trabalhar juntos para ajustar a estratégia até que você alcance os resultados esperados.
          </motion.p>

          {/* Detalhamento da Garantia */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h5 className="text-xl font-semibold text-[#000]">O que está incluso?</h5>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-200">
              Nossa garantia cobre todos os aspectos do serviço. Se não obtiver os resultados prometidos ou se não estiver satisfeito com o serviço prestado, oferecemos sessões adicionais ou ajustes necessários.
            </p>
          </motion.div>

          {/* Botão */}
          <div className="flex justify-center lg:justify-start mt-6">
              <motion.a
                href="https://novolink.com"  // Aqui você pode trocar pelo novo link desejado
                className="inline-flex items-center justify-center gap-x-2 py-4 px-8 text-white  bg-[#000] hover:bg-[#1DA65D] rounded-lg shadow-lg transition-all duration-300 uppercase"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-label="Descubra mais"
              >
                DESCUBRA MAIS
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
      </div>

      {/* Imagem Responsiva Ajustada */}
      <img
        alt="Imagem do selo"
        src={image}
        className="h-56 w-full object-contain sm:h-full sm:object-cover"
      />
    </section>
  );
};

export default SeloSection;
