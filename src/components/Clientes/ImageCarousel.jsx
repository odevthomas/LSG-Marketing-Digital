"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import React from 'react';

const ImageCarousel = () => {
    const images = [
        "/outs/1.png",
        "/outs/2.png",
        "/outs/3.png",
        "/outs/4.png",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Imagem */}
                    <div className="flex justify-center items-center">
                        <motion.div 
                            className="image-container" 
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={images[activeIndex]} 
                                alt={`Imagem ${activeIndex + 1}`} 
                                className="rounded-xl object-cover h-[500px] w-full shadow-xl shadow-gray-800" 
                            />
                        </motion.div>
                    </div>

                    {/* Texto e Botões */}
                    <div className="max-w-xl px-4 space-y-5 text-center lg:text-left">
                        <motion.h3 
                            className="text-black font-semibold text-xl sm:text-2xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            O que nossos clientes dizem
                        </motion.h3>

                        <motion.p 
                            className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            RESULTADOS SURPREENDENTES
                        </motion.p>

                        <motion.p 
                            className="mt-3 text-lg mb-4 text-black"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham suas experiências e a eficácia de nossas soluções inovadoras.
                        </motion.p>

                        {/* Botão único para WhatsApp (Agora Preto) */}
                        <div className="mt-6 flex justify-start items-center space-x-4">
                            <motion.a 
                                href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0" 
                                className="inline-flex items-center justify-center gap-x-2 py-3 px-6 text-white font-semibold rounded-lg bg-black shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out"
                                initial={{ opacity: 1 }} // Define que o botão será sempre visível
                                animate={{ opacity: 1 }} // Não há animação de opacidade agora
                                transition={{ duration: 0.5 }}
                            >
                                Saber mais
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;