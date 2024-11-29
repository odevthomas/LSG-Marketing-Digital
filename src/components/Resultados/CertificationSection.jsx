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

export default function CertificationSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-8">
                <h4 className="text-black text-3xl font-extrabold">Certificações e Parcerias</h4>
                <p className="mt-4 text-black text-base">
                    Conheça nossas certificações e parcerias que garantem a qualidade dos nossos serviços.
                </p>
            </div>
            <ul className="space-y-6">
                {members.map((item, idx) => (
                    <motion.li 
                        key={idx} 
                        className="flex items-start space-x-6 py-6 border-b border-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }} // Animação inicial
                        animate={{ opacity: 1, scale: 1 }} // Animação final
                        transition={{ duration: 0.5, delay: idx * 0.1 }} // Transição suave com delay
                    >
                        <img 
                            src={item.icon} 
                            alt={item.title} 
                            className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover" 
                        />
                        <div>
                            <span className="block text-lg text-black font-semibold">{item.title}</span>
                            <span className="block text-sm text-gray-700">{item.desc}</span>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
