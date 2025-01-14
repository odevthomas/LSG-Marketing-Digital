import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Statistics = () => {
    const stats = [
        { data: 700000, title: "Vendas Geradas", description: "Resultados reais para nossos clientes." },
        { data: 7000000, title: "Anos de Mercado", description: "Uma jornada de sucesso." },
        { data: 40, title: "Clientes Fiéis", description: "Parceiros de longo prazo." },
    ];

    const [count, setCount] = useState(Array(stats.length).fill(0));

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return `+${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
        }
        if (num >= 1000) {
            return `+${Math.floor(num / 1000)}K`;
        }
        return `+${num}`;
    };

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
            timers.forEach(timer => clearInterval(timer));
        };
    }, []);

    return (
        <section className="py-10 sm:py-12 bg-white lg:px-16 text-center">
            <motion.h2
                id="impacto-global"
                className="block font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Junte-se a nós e faça parte do sucesso!
            </motion.h2>

            <ul className="flex flex-col sm:flex-row sm:space-x-8 items-center justify-center gap-y-6 sm:gap-y-0 sm:flex-wrap lg:divide-x" aria-live="polite">
                {stats.map((item, idx) => (
                    <motion.li
                        key={idx}
                        className="text-center px-8 md:px-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.3, type: 'spring', stiffness: 100 }}
                    >
                        <h3
                            className="text-4xl sm:text-5xl text-red-600 font-extrabold transition duration-300 ease-in-out"
                            aria-label={`Número de ${item.title}`}
                            style={{
                                fontFamily: '"Orbitron", sans-serif',
                                textShadow: '2px 2px 5px rgba(0,0,0,0.1)',
                                padding: '10px',
                                borderRadius: '8px',
                                display: 'inline-block',
                            }}
                        >
                            {formatNumber(count[idx])}
                        </h3>
                        <p className="mt-2 font-medium text-gray-900 text-sm sm:text-base">{item.description}</p>
                    </motion.li>
                ))}
            </ul>

            <motion.div
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <a
                    href="#servicos" // Link para a seção de serviços
                    className="inline-flex items-center justify-center bg-[#fb1603] text-white py-3 px-6 text-lg sm:text-xl transition duration-300 w-full sm:w-auto hover:bg-[#e64012] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fb1603] focus:ring-opacity-50 text-center rounded-full"
                    aria-label="Clique para conhecer nossos serviços"
                >
                    Confira nossos Serviços
                </a>
            </motion.div>
        </section>
    );
};

export default Statistics;