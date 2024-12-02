"use client";

import { motion } from "framer-motion";
import React from "react";
import FloatingWhatsApp from "../Buttons/FloatingWhatsApp"; // Ajuste o caminho conforme necessário


const ChatbotSection = () => {
  return (
    <section
      className="relative py-28 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/img/7.jpeg')" }} // Certifique-se de que o caminho está correto
    >
      <motion.div
        className="relative z-1 gap-9 items-start lg:flex py-10 px-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-left lg:max-w-lg lg:text-left mt-15">
          <h3 className="text-3xl text-white font-semibold md:text-4xl lg:text-5xl">
            Atendimento com{" "}
            <span className="text-[#81ff94]">Chatbots Inteligentes</span>
          </h3>
          <p className="text-white leading-relaxed mt-6 text-base sm:text-lg lg:text-xl">
            Ao integrar um chatbot ao seu sistema, você não apenas otimiza o
            suporte ao cliente, mas também permite que sua equipe foque em
            tarefas mais estratégicas, aumentando a eficiência e a produtividade
            do seu negócio.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <motion.a
href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"              className="inline-flex items-center justify-center gap-x-2 py-4 px-8 text-black bg-[#fff] hover:bg-[#1DA65D] rounded-lg shadow-lg transition-all duration-300 uppercase"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              aria-label="Descubra mais"
            >
              Demonstração Grátis{" "}
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
        {/* Container do vídeo */}
        <div className="flex-1 mt-5 mx-auto sm:w-full lg:mt-0 lg:w-auto relative">
          <motion.video
            src="/videos/chatbot.mp4"
            alt="Chatbot em ação"
            className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md"
            autoPlay
            loop
            muted
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

            <FloatingWhatsApp />

    </section>
  );
};

export default ChatbotSection;
