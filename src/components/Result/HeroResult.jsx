import { motion } from 'framer-motion';
import React from 'react';
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

export default () => (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-var(--color-dark-bg) rounded-lg shadow-lg">
        <div className="text-center mb-8">
            <h4 className="text-[#fff] text-3xl font-extrabold">Certificações e Parcerias</h4> {/* Título em amarelo */}
            <p className="mt-2 text-var(--color-text-light) text-base">Conheça nossas certificações e parcerias que garantem a qualidade dos nossos serviços.</p>
        </div>
        <ul className="divide-y" style={{ borderColor: '#FAAD14' }}> {/* Linhas de separação em amarelo */}
            {
                members.map((item, idx) => (
                    <motion.li 
                        key={idx} 
                        className="py-5 flex items-start hover:bg-var(--color-hover) transition duration-300"
                        initial={{ opacity: 0, scale: 0.8 }} // Animação inicial
                        animate={{ opacity: 1, scale: 1 }} // Animação final
                        transition={{ duration: 0.5, delay: idx * 0.1 }} // Transição suave com delay
                    >
                        <img 
                            src={item.icon} 
                            alt={item.title} 
                            className="w-14 h-14 rounded-full border-2 border-var(--color-border) object-cover" 
                        />
                        <div className="ml-4">
                            <span className="block text-lg text-var(--color-primary) font-semibold">{item.title}</span>
                            <span className="block text-sm text-var(--color-text-light)">{item.desc}</span>
                        </div>
                    </motion.li>
                ))
            }
        </ul>
    </div>
);
