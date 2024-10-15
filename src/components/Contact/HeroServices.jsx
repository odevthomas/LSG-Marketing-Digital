
"use client";

import { motion } from 'framer-motion';
import React from 'react';


export default () => {
    return (
        <section className="relative py-28 w-full bg-white"> 
            <motion.div 
                className="relative z-10 gap-5 items-center lg:flex py-10 px-6 rounded-lg"  // Removido shadow-lg
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-[#000] font-semibold md:text-4xl text-center">
                        Transforme seu Atendimento com <span className="text-[#333]">Chatbots Inteligentes</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mt-3 text-center">
                        Descubra como a implementação de chatbots pode revolucionar a experiência do cliente. Nossos chatbots humanizados melhoram o atendimento, respondendo perguntas frequentes e auxiliando em processos de vendas, tudo em tempo real.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3 text-center">
                        Ao integrar um chatbot ao seu sistema, você não apenas otimiza o suporte ao cliente, mas também garante que sua equipe possa se concentrar em tarefas mais estratégicas, aumentando a eficiência geral do negócio.
                    </p>
                    <div className="flex justify-center">
                        <motion.a
                            className="mt-5 px-4 py-2 text-white font-medium bg-[#25D366] rounded-full inline-flex items-center transition duration-200 hover:bg-[#20B560] shadow-md"  // shadow-md permanece
                            href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
                            animate={{ scale: [1, 1.05, 1] }}
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
                    <motion.video 
                        src="/servicos/chatbot.mp4" 
                        alt="Chatbot em ação"
                        className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md"  // shadow-md permanece
                        autoPlay
                        loop
                        muted
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>

            {/* Botão flutuante do WhatsApp */}
            <a 
                href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
                className="fixed bottom-5 right-5 p-4 bg-[#25D366] rounded-full shadow-lg transition duration-100 hover:bg-[#20B560] animate-pulse z-20"
                aria-label="Falar no WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 258">
                    <defs>
                        <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stop-color="#1faf38"/>
                            <stop offset="100%" stop-color="#60d669"/>
                        </linearGradient>
                        <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stop-color="#f9f9f9"/>
                            <stop offset="100%" stop-color="#fff"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/>
                    <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/>
                    <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/>
                </svg>
            </a>
        </section>
    );
};
