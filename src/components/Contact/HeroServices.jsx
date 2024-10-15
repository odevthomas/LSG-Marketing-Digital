"use client";

import { motion } from 'framer-motion';

export default () => {
    return (
        <section className="relative py-28 w-full bg-white"> {/* Fundo branco completo */}
            <motion.div 
                className="relative z-10 gap-5 items-center lg:flex py-10 px-6 rounded-lg"
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
                            className="mt-5 px-4 py-2 text-[#333] font-medium bg-[#25D366] rounded-full inline-flex items-center"
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
                        src="/servicos/chatbot.mp4" // Substitua pelo caminho do seu vídeo
                        alt="Chatbot em ação"
                        className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md"
                        autoPlay
                        loop
                        muted
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
