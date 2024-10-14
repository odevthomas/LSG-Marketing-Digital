"use client";

import { motion } from 'framer-motion';

const ImageDisplay = () => {
    const image = "https://hiraycacavazamentos.com.br/wp-content/uploads/2019/11/selo-garantia-700x471.png"; // Substitua pelo caminho da sua imagem

    return (
        <section className="py-14 bg-[#010101]">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-12 sm:px-4 md:px-0">
                    {/* Seção sobre Garantia com Imagem ao Lado */}
                    <div className="flex-1">
                        <motion.div 
                            className="image-container" 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={image} 
                                alt="Imagem do Cliente" 
                                className="max-w-full h-auto sm:max-w-md md:max-w-lg sm:rounded-lg object-cover" 
                            />
                        </motion.div>
                    </div>

                    <div className="flex-1 mt-6 lg:mt-0">
                        <h4 className="text-[#FAAD14] text-3xl font-extrabold text-center">GARANTIA</h4>
                        <p className="mt-4 text-var(--color-text-light) text-base text-center">
                            Estamos tão confiantes na qualidade e eficácia do nosso trabalho que oferecemos uma garantia de satisfação!
                        </p>
                        <motion.p 
                            className="mt-3 text-gray-700 text-lg sm:text-xl lg:text-2xl text-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Se, após nossa mentoria ou serviço, você não estiver satisfeito com os resultados ou o direcionamento, vamos trabalhar juntos para ajustar a estratégia até que você alcance os resultados esperados.
                        </motion.p>

                        {/* Botão */}
                        <div className="flex justify-center mt-6">
                            <motion.a 
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#FAAD14] text-black font-semibold rounded-lg hover:bg-[#e0a731] transition duration-200"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Saiba Mais
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageDisplay;
