import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRobot, FaRegHandshake, FaBullhorn, FaLaptop, FaChartLine, FaCode, FaMobileAlt, FaClipboardList, FaNetworkWired } from "react-icons/fa"; // Importando os ícones necessários

const ServicePlans = () => {
  const plans = [
    {
      name: "Gestão de CRM",
      desc: "Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado.",
      icon: <FaUsers size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Implementação de Chatbots",
      desc: "Revolucione seu atendimento ao cliente com chatbots humanizados. Automatize respostas e libere sua equipe.",
      icon: <FaRobot size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Criação de Funil de Vendas",
      desc: "Desenvolva funis de vendas inteligentes que guiam seus leads até a conversão de forma eficaz.",
      icon: <FaRegHandshake size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Campanhas Personalizadas",
      desc: "Alcance o público certo com a mensagem certa e veja resultados concretos.",
      icon: <FaBullhorn size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Criação de Landing Pages",
      desc: "Desenvolva páginas de destino personalizadas para gerar resultados concretos.",
      icon: <FaLaptop size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Análise de Dados",
      desc: "Monitore e analise o desempenho do seu negócio com relatórios detalhados.",
      icon: <FaChartLine size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Desenvolvimento de Websites",
      desc: "Crie um site otimizado e responsivo que represente sua marca de forma eficaz.",
      icon: <FaCode size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Otimização para Dispositivos Móveis",
      desc: "Garanta que seu site funcione perfeitamente em todos os dispositivos móveis.",
      icon: <FaMobileAlt size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Integração de Sistemas",
      desc: "Conecte e otimize suas ferramentas para um fluxo de trabalho mais eficiente.",
      icon: <FaNetworkWired size={44} className="text-[#fb1603]" />,
    },
  ];

  return (
    <section className="py-14 bg-black text-white">
      <div className="max-w-full mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soluções <span className="text-[#fb1603]">Digitais</span> que 
          <br />
          Impulsionam seu Negócio
        </motion.h2>
        <motion.h3
          className="text-2xl font-medium text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tecnologia e Estratégia para Cada Fase do seu Crescimento
        </motion.h3>
        <p className="mt-4 text-lg text-gray-300">
          Nossos planos são cuidadosamente elaborados para atender a diversas necessidades e orçamentos. 
          Descubra a solução ideal para revolucionar sua presença digital!
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col rounded-xl border-2 border-transparent bg-[#0f0f0f] shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h4 className="text-white font-medium text-xl ml-2">{item.name}</h4>
              </div>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
