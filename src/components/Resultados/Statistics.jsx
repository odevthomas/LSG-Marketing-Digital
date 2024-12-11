import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Statistics = () => {
    const stats = [
        { data: 700000, title: "Vendas Geradas", description: "Resultados reais para nossos clientes." },
        { data: 7000000, title: "Anos de Mercado", description: "Uma jornada de sucesso." },
        { data: 40, title: "Clientes Fiéis", description: "Parceiros de longo prazo." },
    ];

    const [count, setCount] = useState(Array(stats.length).fill(0));
    const [currentText, setCurrentText] = useState("Junte-se a nós e faça parte do sucesso!");

    const textos = [
        "Junte-se a nós e faça parte do sucesso!",
        "Transforme seu futuro com a gente!",
        "Não perca a chance de crescer conosco!",
        "O sucesso está ao seu alcance. Vamos juntos!",
    ];

    // Função para formatar números de forma legível
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return `+${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`; // Adiciona "M" para milhões
        }
        if (num >= 1000) {
            return `+${Math.floor(num / 1000)}K`; // Adiciona "K" para milhares
        }
        return `+${num}`; // Caso contrário, apenas o número com "+"
    };

    // Função para alternar o texto dinamicamente
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = textos.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % textos.length;
                return textos[nextIndex];
            });
        }, 3000); // Muda o texto a cada 3 segundos

        // Limpeza do intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timers = stats.map((stat, index) => {
            const duration = 6;
            const stepTime = Math.ceil(duration * 1000 / stat.data);
            const step = Math.ceil(stat.data / 100);

            let currentCount = 0;
            const timer = setInterval(() => {
                if (currentCount < stat.data) {
                    currentCount = Math.min(currentCount + step, stat.data);
                    setCount((prev) => {
                        const newCount = [...prev];
                        newCount[index] = currentCount;
                        return newCount;
                    });
                } else {
                    clearInterval(timer);
                }
            }, stepTime);

            return timer;
        });

        return () => {
            timers.forEach(timer => clearInterval(timer)); // Limpeza dos timers ao desmontar
        };
    }, []); // Executa apenas uma vez, quando o componente é montado

    return (
        <section className="py-14 px-4 sm:px-8 lg:px-16 ">
            <motion.h2
                id="impacto-global"
                className="text-center text-3xl sm:text-4xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Nosso Impacto: Resultados Reais, Crescimento Visível
            </motion.h2>

            <ul className="flex flex-col sm:flex-row sm:space-x-10 items-center justify-center gap-y-10 sm:gap-y-0 sm:flex-wrap lg:divide-x" aria-live="polite">
                {stats.map((item, idx) => (
                    <motion.li
                        key={idx}
                        className="text-center px-12 md:px-16"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.3, type: 'spring', stiffness: 100 }}
                    >
                        <h3
                            className="text-5xl sm:text-6xl text-[#000000] font-bold transition duration-300 ease-in-out"
                            aria-label={`Número de ${item.title}`}
                            style={{ 
                                fontFamily: '"Roboto Slab", serif', 
                                textShadow: '1px 1px 3px #000' 
                            }}
                        >
                            {formatNumber(count[idx])}
                        </h3>
                        <p className="mt-3 font-medium text-gray-200 text-sm sm:text-base">{item.description}</p>
                    </motion.li>
                ))}
            </ul>

            <motion.div
                className="text-center text-indigo-600 mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stats.length * 0.3 }}
            >
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center"
                    aria-label="Chamada para ação dinâmica"
                    title="Chamada para ação - Junte-se a nós"
                >
                    {currentText}
                </h2>

                {/* Botão de Chamada para Ação */}
                <motion.button
                    className="mt-6 px-8 py-4 bg-[#fb1603] text-white font-semibold rounded-lg shadow-md hover:bg-[bg-[#212121] transition duration-200 text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => alert('Vamos conversar!')}
                >
                    Pronto para alavancar seu negócio? Vamos conversar e mostrar como podemos ajudar!
                </motion.button>
            </motion.div>

            {/* SEO */}
            <meta name="description" content="Junte-se à nossa equipe e faça parte do sucesso! Transforme seu futuro conosco." />
            <meta property="og:title" content="Junte-se a nós - Sucesso Garantido" />
            <meta property="og:description" content="Faça parte de uma equipe vencedora e transforme o seu futuro!" />
            <meta name="robots" content="index, follow" />
        </section>
    );
};

export default Statistics;
