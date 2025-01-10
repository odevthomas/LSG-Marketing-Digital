import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaComments, FaCogs, FaHandshake } from 'react-icons/fa';

const ChatbotSection = () => {
  return (
    <section id="Servicos" className="py-16 bg-gradient-to-b from-[#000] to-[#000] text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Transforme Seu Atendimento com um Chatbot Inovador!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Automação Inteligente */}
          <motion.div
            className="flex flex-col items-center text-gray-900 justify-center bg-[#fff] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRobot className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">Automação Eficiente</h3>
            <p className="text-sm text-black mb-4">
              Ofereça um atendimento mais rápido e eficiente com nosso chatbot automatizado.
            </p>
          </motion.div>

          {/* Atendimento 24/7 */}
          <motion.div
            className="flex flex-col items-center text-gray-900 justify-center bg-[#fff] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaComments className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">Atendimento 24/7</h3>
            <p className="text-sm text-black mb-4">
              Esteja disponível para seus clientes a qualquer hora, todos os dias da semana.
            </p>
          </motion.div>

          {/* Configuração Simples */}
          <motion.div
            className="flex flex-col items-center text-gray-900 justify-center bg-[#fff] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCogs className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">Configuração Rápida</h3>
            <p className="text-sm text-black mb-4">
              Instale e configure seu chatbot em minutos, sem complicações.
            </p>
          </motion.div>

          {/* Relacionamento com o Cliente */}
          <motion.div
            className="flex flex-col items-center text-gray-900 justify-center bg-[#fff] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandshake className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">Relacionamento Personalizado</h3>
            <p className="text-sm text-black mb-4">
              Aprenda com cada interação e ofereça um atendimento sob medida para seus clientes.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="https://wa.me/5519981331191?text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20meu%20atendimento%20com%20um%20chatbot!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#fb1603] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#e64012] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fb1603] focus:ring-opacity-50 text-center rounded-full"
            aria-label="Clique para falar conosco sobre automação de atendimento via WhatsApp"
          >
            Fale com um Especialista e Comece Sua Transformação!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotSection;
