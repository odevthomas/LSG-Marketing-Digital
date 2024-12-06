"use client";
import { motion } from "framer-motion";
import React from "react";

// Dados das certificações
const members = [
  {
    title: "Google Ads",
    desc: "Especializados em campanhas digitais eficazes, ajudando empresas a crescer e alcançar seus objetivos de marketing.",
    icon: "https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg",
  },
  {
    title: "Meta",
    desc: "Certificação Meta para maximizar presença e engajamento digital através das plataformas Facebook e Instagram.",
    icon: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
  },
  {
    title: "Kommo",
    desc: "Soluções personalizadas com a plataforma CRM da Kommo, proporcionando um atendimento mais eficaz e com maior taxa de conversão.",
    icon: "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png",
  },
];

const CertificationSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16 relative">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Título e descrição */}
        <motion.h4
          className="text-4xl font-semibold text-[#212121] mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificações e Parcerias que{" "}
          <span className="text-[#81ff94]">Impulsionam Seu Sucesso </span>
        </motion.h4>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Com certificações de líderes de mercado como Google, Meta e Kommo, nossa equipe está preparada para levar sua empresa a novos patamares com estratégias digitais altamente eficazes.
        </motion.p>
      </div>

      {/* Certificações */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-6 bg-white p-8 rounded-2xl border-2 hover:border-[#81ff94]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 rounded-full border-2 border-[#81ff94] object-cover"
            />
            <div>
              <h5 className="text-xl font-semibold text-[#000]">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
