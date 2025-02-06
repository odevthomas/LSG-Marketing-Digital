import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaComments, FaCogs, FaHandshake } from 'react-icons/fa';

const ChatbotSection = () => {
  const cardVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    tap: { scale: 0.95 }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardData = [
    {
      icon: FaRobot,
      title: "IA Inteligente",
      description: "Transformação digital com tecnologia de ponta e eficiência máxima.",
      delay: 0
    },
    {
      icon: FaComments,
      title: "Suporte Inteligente",
      description: "Atendimento contínuo e personalizado, 24 horas por dia.",
      delay: 0.2
    },
    {
      icon: FaCogs,
      title: "Implementação Rápida",
      description: "Solução plug-and-play sem complexidade técnica.",
      delay: 0.4
    },
    {
      icon: FaHandshake,
      title: "Experiência Única",
      description: "Interações que antecipam e superam expectativas do cliente.",
      delay: 0.6
    }
  ];

  return (
    <section 
      id="solucoes-ia-atendimento" 
      className="py-20 bg-white text-gray-900 overflow-hidden"
      aria-labelledby="chatbot-title"
    >
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <motion.h2
          id="chatbot-title"
          className="text-5xl md:text-6xl font-black text-black mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforme seu Atendimento com <span className="text-[#f11414]">Inteligência Artificial</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 group overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    delay: card.delay
                  }
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <card.icon 
                className="mx-auto text-6xl text-[#f11414] mb-6 group-hover:scale-110 transition-transform" 
                aria-hidden="true"
              />
              <h2 className="text-2xl font-bold text-black mb-4 group-hover:text-[#f11414] transition-colors">
                {card.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://wa.me/5519981331191?text=Quero%20revolucionar%20meu%20atendimento%20com%20IA!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f11414] text-white px-12 py-5 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#f11414] focus:ring-opacity-50"
            aria-label="Iniciar transformação do atendimento via WhatsApp"
          >
            Transforme Agora!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotSection;
