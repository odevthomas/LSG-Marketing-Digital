"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import React from 'react';
const ImageCarousel = () => {
    const images = [
        "/Clients/1.png",
        "/Clients/2.png",
        "/Clients/3.png",
        "/Clients/4.png",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-14" style={{ backgroundColor: '#ffffff' }}>
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-x-12 sm:px-4 md:px-0">
                    <div className="flex-1 sm:hidden lg:block">
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
                                className="md:max-w-lg sm:rounded-lg object-cover h-[500px] w-full" 
                            />
                        </motion.div>
                    </div>
                    <div className="max-w-xl px-4 space-y-5 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <motion.h3 
                            className="text-[#333] font-semibold mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            O que nossos clientes dizem
                        </motion.h3>
                        <motion.p 
                            className="text-[#212121] text-4xl font-semibold sm:text-5xl mb-4 text-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Clientes com resultados surpreendentes
                        </motion.p>
                        <motion.p 
                            className="mt-3 text-lg mb-4 text-[#212121] text-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham suas experiências e a eficácia de nossas soluções inovadoras.
                        </motion.p>
                        <div className="flex justify-center mt-6"> {/* Contêiner flex para centralizar */}
                        <motion.a 
                                href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0" 
                                className="inline-flex items-center justify-center gap-x-1 py-2 px-4 text-white bg-[#25D366] hover:bg-[#1DA65D] rounded-md shadow-md transition duration-50"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: [0, 1, 0] }}  // Faz o elemento piscar
                                transition={{ duration: 1, repeat: Infinity }}  // Repete a animação indefinidamente
                            >
                                Descubra mais
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
