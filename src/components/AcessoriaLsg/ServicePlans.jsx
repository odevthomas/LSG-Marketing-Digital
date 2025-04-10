import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaRobot,
  FaRegHandshake,
  FaBullhorn,
  FaLaptop,
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

const ServicePlans = () => {
  const plans = [
    {
      name: "Gestão de CRM",
      desc: "Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado.",
      icon: <FaUsers size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Implementação de Chatbots",
      desc: "Revolucione seu atendimento com chatbots humanizados. Automatize respostas e libere sua equipe.",
      icon: <FaRobot size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Criação de Funil de Vendas",
      desc: "Funis inteligentes que guiam seus leads até a conversão com mais eficiência.",
      icon: <FaRegHandshake size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Campanhas Personalizadas",
      desc: "Alcance o público certo com a mensagem ideal e veja resultados concretos.",
      icon: <FaBullhorn size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Criação de Landing Pages",
      desc: "Páginas de destino sob medida para gerar resultados reais e mensuráveis.",
      icon: <FaLaptop size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Análise de Dados",
      desc: "Relatórios e insights para decisões estratégicas baseadas em dados.",
      icon: <FaChartLine size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Desenvolvimento de Websites",
      desc: "Sites responsivos, otimizados e alinhados à sua identidade de marca.",
      icon: <FaCode size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Otimização para Dispositivos Móveis",
      desc: "Experiência fluida e otimizada em todos os tipos de telas.",
      icon: <FaMobileAlt size={44} className="text-[#fb1603]" />,
    },
    {
      name: "Integração de Sistemas",
      desc: "Conecte suas ferramentas e otimize os fluxos do seu negócio.",
      icon: <FaNetworkWired size={44} className="text-[#fb1603]" />,
    },
  ];

  return (
    <section className="py-14 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-12 text-black tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soluções <span className="text-[#fb1603]">Digitais</span> que
          <br />
          Impulsionam seu Negócio
        </motion.h2>

        <motion.h3
          className="text-2xl font-medium text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tecnologia e Estratégia para Cada Fase do seu Crescimento
        </motion.h3>

        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          Nossos planos são pensados para atender empresas em diferentes estágios.
          Descubra qual solução pode revolucionar sua presença digital!
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h4 className="text-black font-semibold text-lg ml-3">{item.name}</h4>
              </div>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
