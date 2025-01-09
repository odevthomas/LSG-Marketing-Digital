import React from "react";
import { motion } from "framer-motion";

const PrintSevicos = () => {
  const ServicosItems = [
    {
      image: "/Servicos/campanha.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20Campanhas%20Digitais!",
      titulo: "Campanhas Digitais"
    },
    {
      image: "/Servicos/crm.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20CRM%20e%20Automação%20de%20Marketing!",
      titulo: "CRM e Automação de Marketing"
    },
    {
      image: "/Servicos/funil.png",
      mensagemWhatsApp: "Gostaria%20de%20saber%20mais%20sobre%20Funil%20de%20Vendas!",
      titulo: "Funil de Vendas"
    },
  ];

  return (
    <section id="Servicos" className="py-16 bg-gradient-to-b from-[#000] to-[#333] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <motion.h3
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços Essenciais para Impulsionar seu Sucesso
        </motion.h3>

        {/* Lista de serviços */}
        <div className="mt-12 space-y-12">
          {ServicosItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center transition duration-500 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Imagem do serviço */}
              <motion.img
                src={item.image}
                alt={item.titulo}
                className="w-full h-auto object-cover rounded-3xl border-1 border-[#00000000] shadow-lg"
              />

              {/* Título do serviço */}
              <motion.h4
                className="mt-6 text-2xl font-semibold text-[#f1f1f1] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {item.titulo}
              </motion.h4>

              {/* Botão para cada serviço */}
              <motion.a
                href={`https://wa.me/5519981331191?text=${item.mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#f11414] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-opacity-50 text-center rounded-full"
                aria-label={`Clique para saber mais sobre ${item.titulo}`}
              >
                Fale com um Especialista sobre {item.titulo}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintSevicos;
