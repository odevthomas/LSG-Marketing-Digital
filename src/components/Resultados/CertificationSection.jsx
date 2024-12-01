"use client";
import { motion } from "framer-motion";
import React from "react";

// Dados das certificações
const members = [
  {
    title: "Google Ads",
    desc: "Nossa equipe é certificada em Google Ads, especializada em criar campanhas digitais eficazes que maximizam resultados.",
    icon: "https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg",
  },
  {
    title: "Meta",
    desc: "Possuímos certificação Meta, utilizando ferramentas avançadas para impulsionar sua presença digital e engajamento.",
    icon: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
  },
  {
    title: "Kommo",
    desc: "Parceria com a Kommo para oferecer soluções personalizadas através de uma plataforma CRM robusta.",
    icon: "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png",
  },
];

const CertificationSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Título e descrição da seção */}
        <motion.h4
          className="text-3xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificações e Parcerias
        </motion.h4>
        <motion.p
          className="mt-4 text-base text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Conheça nossas certificações e parcerias que garantem a qualidade dos nossos serviços.
        </motion.p>
      </div>

      {/* Lista de Certificações */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
            />
            <div>
              <h5 className="text-lg font-semibold text-gray-900">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
