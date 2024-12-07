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
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-16 bg-[#F4F4F4] relative z-10"> {/* Adicionando z-index aqui */}
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
                            className="text-[#212121] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Resultados <span className="text-[#81ff94]">Surpreendentes!</span>
                        </motion.h3>

                        <motion.p
                            className="text-[#010101] text-lg sm:text-xl md:text-2xl leading-relaxed"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            O que nossos clientes dizem
                        </motion.p>

                        <motion.p
                            className="mt-3 text-lg mb-4 text-[#333]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Descubra como nossas estratégias de marketing transformam interações em resultados reais. Nossos clientes compartilham suas experiências e a eficácia de nossas soluções inovadoras.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;