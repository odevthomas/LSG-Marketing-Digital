import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { TrendingUp, Award, Users } from 'lucide-react';

const Statistics = () => {
    const stats = [
        { 
            data: 700000, 
            title: "Vendas Geradas", 
            description: "Mais de R$ 700.000 em vendas conquistadas!", 
            icon: TrendingUp 
        },
        { 
            data: 7, 
            title: "Anos de Mercado", 
            description: "Anos de experiência e excelência!", 
            icon: Award 
        },
        { 
            data: 40, 
            title: "Clientes Fiéis", 
            description: "Clientes que já confiaram em nosso trabalho!", 
            icon: Users 
        },
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
            const duration = 3;
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
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white lg:px-16 text-center">
            <motion.h2
                id="impacto-global"
                className="block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-12 px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Nosso Impacto em Números
            </motion.h2>

            <ul className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12" aria-live="polite">
                {stats.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.li
                            key={idx}
                            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: idx * 0.3, 
                                type: 'spring', 
                                stiffness: 120 
                            }}
                        >
                            <div className="mb-4 flex items-center justify-center">
                                <IconComponent 
                                    className="text-red-600" 
                                    size={48} 
                                    strokeWidth={1.5} 
                                />
                            </div>
                            <h3
                                className="text-5xl text-red-600 font-extrabold mb-2"
                                aria-label={`Número de ${item.title}`}
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    textShadow: '2px 2px 5px rgba(0,0,0,0.1)',
                                }}
                            >
                                {formatNumber(count[idx])}
                            </h3>
                            <p className="font-medium text-gray-800 text-base">{item.description}</p>
                        </motion.li>
                    );
                })}
            </ul>

            <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <a
                    href="#servicos"
                    className="inline-flex items-center justify-center bg-[#fb1603] text-white py-4 px-8 text-xl transition duration-300 hover:bg-[#e64012] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fb1603] focus:ring-opacity-50 rounded-full shadow-lg hover:shadow-xl"
                    aria-label="Conheça nossos serviços"
                >
                    Descubra Nossos Serviços
                </a>
            </motion.div>
        </section>
    );
};

export default Statistics;