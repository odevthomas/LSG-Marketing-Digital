import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

const Statistics = () => {
    const stats = [
        { data: 700000, title: "Gerados em Vendas" },
        { data: +7000000, title: " anos no mercado " }, // Ajustado para incluir "anos"
        { data: +40, title: " Clientes Fieis " }, // Ajustado para incluir "anos"
    ];

    const [count, setCount] = useState(Array(stats.length).fill(0));

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return `+${(num / 1000000).toFixed(1).replace(/\.0$/, '')}`; // Adicionando o símbolo "+" para milhões
        }
        if (num >= 1000) {
            return `+${Math.floor(num / 1000)}K`; // Adicionando o símbolo "+" para milhares
        }
        return `+${num}`; // Adicionando o símbolo "+" para números abaixo de mil
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
        <div className="py-14 my-8 bg-[#010101]">
            <motion.h2 
                className="text-center text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Resultados que Falam por Si: Nosso Impacto Global
            </motion.h2>
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                {stats.map((item, idx) => (
                    <motion.li 
                        key={idx} 
                        className="text-center px-12 md:px-16"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.3, type: 'spring', stiffness: 100 }}
                    >
                        <h4 className="text-4xl text-[#25D366] font-semibold"> {/* Cor verde do WhatsApp */}
                            {formatNumber(count[idx])}
                        </h4>
                        <p className="mt-3 font-medium text-gray-700">{item.title}</p>
                    </motion.li>
                ))}
            </ul>
            <motion.div 
                className="mt-8 text-center text-indigo-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stats.length * 0.3 }}
            >
                <h2 className="text-2xl font-bold">Junte-se a nós e faça parte do sucesso!</h2>
            </motion.div>
        </div>
    );
};

export default Statistics;
