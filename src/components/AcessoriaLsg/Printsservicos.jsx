import React from "react";
import { motion } from "framer-motion";

const PrintSevicos = () => {
  const ServicosItems = [
    {
      image: "/Servicos/campanha.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20Campanhas%20Digitais!",
      titulo: "Campanhas Digitais",
      descricao: "Estratégias personalizadas para alcançar seu público-alvo e impulsionar resultados."
    },
    {
      image: "/Servicos/crm.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20CRM%20e%20Automação%20de%20Marketing!",
      titulo: "CRM e Automação",
      descricao: "Otimize relacionamentos e processos com soluções inteligentes de gestão."
    },
    {
      image: "/Servicos/funil.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20Funil%20de%20Vendas!",
      titulo: "Funil de Vendas",
      descricao: "Maximize conversões e eficiência com análise e otimização de funil."
    },
  ];

  return (
    <section 
      id="Servicos" 
      className="py-20 bg-gradient-to-br from-black via-[#121212] to-[#1e1e1e] text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Título com efeito moderno */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ff6b00] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Serviços que Transformam Negócios
        </motion.h2>

        {/* Grid de serviços com design moderno */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ServicosItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#000] rounded-2xl overflow-hidden border border-[#333] transform transition-all duration-300 hover:scale-105 hover:border-[#ff6b00]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Imagem do serviço sem overlay */}
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.titulo} 
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Conteúdo do serviço */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-[#ff6b00] mb-4">
                  {item.titulo}
                </h3>
                <p className="text-gray-300 mb-6">
                  {item.descricao}
                </p>

                {/* Botão de chamada com estilo moderno */}
                <a
                  href={`https://wa.me/5519981331191?text=${item.mensagemWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#ff6b00] text-black font-semibold rounded-full 
                  hover:bg-white transition-all duration-300 
                  transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                >
                  Consulta Gratuita
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintSevicos;
