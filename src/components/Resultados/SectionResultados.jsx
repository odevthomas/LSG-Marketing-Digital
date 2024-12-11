"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Statistics from '../Resultados/Statistics';

const SectionResultados = () => {
  const messages = [
    { text: "Oi Lucas, tudo bem? Chegou um LED incrível hoje! 😊", client: "Carolina", timestamp: "Recebida há 15 minutos", location: "RJ" },
    { text: "Oi Lucas, estou muito empolgado com a nossa campanha! 🚀", client: "Izabele", timestamp: "Recebida há 50 minutos", location: "SP" },
    { text: "Oii Lucas, acredita que meu bot está funcionando certinho? 🤖", client: "Julio", timestamp: "Recebida ontem", location: "RJ" },
    { text: "Boa tarde, olha, já agendei 6 clientes para esse fim de semana! 📅", client: "Rodolfo", timestamp: "Recebida hoje", location: "SP" },
    { text: "Oi Lucas, os resultados da última campanha foram incríveis! 🎉", client: "Matheus", timestamp: "Recebida há 2 horas", location: "RJ" },
    { text: "Oi Lucas, estou vendo um aumento nas vendas, muito obrigado! 💰", client: "Paulo", timestamp: "Recebida há 30 minutos", location: "SP" },
  ];

  const [currentMessageIndices, setCurrentMessageIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndices((prevIndices) => {
        const nextIndex1 = (prevIndices[0] + 2) % messages.length;
        const nextIndex2 = (prevIndices[1] + 2) % messages.length;
        return [nextIndex1, nextIndex2];
      });
    }, 5000); // Trocar a mensagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      style={{ backgroundImage: "url('/img/HeroResultados.jpeg')" }}
      aria-labelledby="testimonials"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#fd2b18d7] to-[#0000004e] opacity-85"></div>

      <div className="relative w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <motion.h3
            className="text-white font-semibold mt-7 text-lg sm:text-xl"
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            O que nossos clientes alcançam com tráfego pago
          </motion.h3>

          <motion.p
            className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mt-7"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Resultados comprovados que geram impacto
          </motion.p>

          <motion.p
            className="mt-7 text-white text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Com estratégias personalizadas de tráfego pago, ajudamos empresas a atingir novos patamares. Confira os prints de resultados reais e veja como nossa expertise transforma cliques em clientes e oportunidades para o seu negócio!
          </motion.p>
        </div>

        {/* Mensagens do cliente estilo iPhone */}
        <div className="flex flex-col items-center space-y-2">
          {currentMessageIndices.map((index) => (
            <motion.div
              key={index}
              className={`bg-white text-black rounded-lg shadow-lg p-3 flex items-center space-x-3 w-fit ${index % 2 === 0 ? "self-start" : "self-end"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                borderRadius: "20px",
                padding: "10px 15px",
                position: "relative",
                margin: "5px 0",
                maxWidth: "75%",
              }}
            >
              <img src={`/img/cliente${index + 1}.jpg`} alt={messages[index].client} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <div>
                  <strong>{messages[index].client}: </strong>{messages[index].text}
                </div>
                <span className="text-xs text-gray-500">{messages[index].timestamp}</span>
                <span className="text-xs text-gray-500">{`Local: ${messages[index].location}`}</span>
              </div>
              <div className={`absolute w-0 h-0 border-l-8 border-l-white border-t-8 border-t-transparent ${index % 2 === 0 ? "top-1/2 left-0 transform -translate-y-1/2" : "top-1/2 right-0 transform -translate-y-1/2"}`} />
            </motion.div>
          ))}
        </div>

        <Statistics />

       
      </div>
    </motion.section>
  );
};

export default SectionResultados;
