"use client";
import { motion } from "framer-motion";
import React from "react";

const SeloSection = () => {
  const image = "./src/assets/garantia.png"; // Caminho da imagem

  return (
    <section className="bg-white py-12 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Texto da seção */}
        <div className="text-center sm:text-left space-y-6">
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Garantia
          </motion.h2>

          <motion.p
            className="text-lg text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Confiança total na qualidade. Garantimos sua satisfação.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h5 className="text-lg font-semibold text-gray-800">O que inclui?</h5>
            <p className="text-sm text-gray-600 mt-2">
              Caso não esteja satisfeito, oferecemos ajustes ou sessões adicionais.
            </p>
          </motion.div>

          {/* Botão de CTA */}
          <motion.div
            className="flex justify-center sm:justify-start mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Ola quero saber com funciona" // Link do botão
              className="inline-flex items-center py-3 px-6 bg-black text-white hover:bg-[#1DA65D] rounded-lg shadow-md transition-all duration-300"
              aria-label="Descubra mais"
            >
              DESCUBRA MAIS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Imagem Responsiva */}
        <div className="flex justify-center sm:justify-end">
          <motion.img
            src={image}
            alt="Garantia de Satisfação"
            className="w-40 sm:w-48 md:w-64 lg:w-72 h-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SeloSection;