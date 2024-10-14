"use client";

import { motion } from 'framer-motion';

export default () => {
    return (
        <section className="relative py-28 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-[#131313] opacity-40"></div>
            <motion.div 
                className="relative z-10 gap-5 items-center lg:flex bg-[#131313] py-10 px-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-white font-semibold md:text-4xl text-center">
                        Resultados que Transformam <span className="text-[#FAAD14]">Seu Negócio</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-3 text-center">
                        Cada projeto é uma história de sucesso! Nossa expertise em marketing digital gera resultados tangíveis, impulsionando suas vendas e expandindo sua presença no mercado.
                    </p>
                    <div className="flex justify-center">
                        <motion.a
                            className="mt-5 px-4 py-2 text-[#FAAD14] font-medium bg-[#131313] rounded-full inline-flex items-center"
                            href="javascript:void()"
                            animate={{ scale: [1, 1.05, 1] }} // Animação de piscar
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
                        >
                           Falar com especialista
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-full lg:mt-0 lg:w-auto">
                    <motion.img 
                        src="/Resultados/resultado-hero.jpg" 
                        alt="Resultados" 
                        className="w-full h-auto max-h-[600px] object-cover" 
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
