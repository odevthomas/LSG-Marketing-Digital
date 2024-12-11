"use client";

import { motion } from "framer-motion";
import React from "react";

const ChatbotSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center z-10"
      style={{ backgroundImage: "url('/img/7.jpeg')" }}
    >
      {/* Overlay escurecido para melhor legibilidade */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="relative flex flex-col items-center justify-center py-28 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        {/* Título */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-6 mb-4">
          Quer automatizar seu atendimento?{" "}
          <span className="text-[#f7f7f7]">Chatbots</span>
        </h3>

        {/* Descrição */}
        <p className="text-white leading-relaxed mt-6 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto">
          Integrar um chatbot ao seu sistema permite otimizar o atendimento ao
          cliente, oferecendo respostas instantâneas e soluções rápidas. Isso
          não só melhora a experiência do cliente, mas também libera sua equipe
          para focar em tarefas mais estratégicas, aumentando a produtividade e
          eficiência do seu negócio.
        </p>

        {/* Botão de ação */}
        <motion.a
          href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
          className="inline-flex items-center justify-center gap-x-2 mt-6 py-4 px-8 text-black bg-white hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Descubra mais sobre chatbots"
        >
          Quero saber mais
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
      </motion.div>
    </section>
  );
};

export default ChatbotSection;
