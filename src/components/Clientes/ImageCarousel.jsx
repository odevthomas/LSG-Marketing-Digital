"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import React from 'react';

const ImageCarousel = () => {
    const images = [
        "/outs/7.png",
        "/outs/5.png",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="bg-gradient-to-b from-black to-[#0000] py-16 relative z-10">
            <div className="max-w-full mx-auto px-6 md:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Imagem */}
                    <div className="flex justify-center items-center w-full">
                        <motion.div
                            className="image-container w-full"
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={images[activeIndex]}
                                alt={`Imagem ${activeIndex + 1}`}
                                className="rounded-xl object-cover w-full h-auto max-h-[500px] sm:max-h-[400px] md:max-h-[500px]"
                            />
                        </motion.div>
                    </div>

                    {/* Texto e Conteúdo */}
                    <div className="w-full lg:max-w-xl px-4 space-y-5 text-center lg:text-left">
                        <motion.h3
                            className="text-gray-100 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Resultados <span className="text-[#f7f7f7]">Surpreendentes!</span>
                        </motion.h3>

                        <motion.p
                            className="text-[#f4f4f4] text-lg sm:text-xl md:text-2xl leading-relaxed"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            O que nossos clientes dizem
                        </motion.p>

                        <motion.p
                            className="mt-3 text-lg mb-4 text-[#f4f4f4]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham suas experiências e a eficácia de nossas soluções inovadoras.
                        </motion.p>

                        {/* CTAs */}
                        <div className="mt-6 space-y-4">
                            <button className="bg-[#fb1603] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#d85d2b] transition-colors w-full md:w-auto">
                                Quer resultados assim para sua empresa? Clique aqui e fale com um especialista!
                            </button>
                            <button className="bg-[#fb1603] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#d85d2b] transition-colors w-full md:w-auto">
                                Descubra como podemos transformar o futuro do seu negócio.
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ImageCarousel;
