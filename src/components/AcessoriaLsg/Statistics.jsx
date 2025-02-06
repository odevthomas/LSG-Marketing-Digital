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
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 lg:px-16 text-center">
            <div className="max-w-4xl mx-auto">
                <motion.span
                    className="text-red-600 font-semibold text-base sm:text-lg mb-2 sm:mb-4 block tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Conheça Nossa Trajetória
                </motion.span>
                
                <motion.h2
                    id="impacto-global"
                    className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-3 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <span className="block lg:inline">Transformando Números em</span>
                    <span className="text-red-600 block lg:inline lg:ml-3">Histórias de Sucesso</span>
                </motion.h2>

                <motion.p
                    className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-16 px-4 leading-relaxed"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Mais do que números, cada resultado representa uma história de transformação.
                    <span className="block mt-2 text-gray-500 text-sm sm:text-base">
                        Descubra como estamos impactando negócios e construindo parcerias duradouras.
                    </span>
                </motion.p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto px-4">
                {stats.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.li
                            key={idx}
                            className="text-center p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: idx * 0.3, 
                                type: 'spring', 
                                stiffness: 120 
                            }}
                        >
                            <div className="mb-4 sm:mb-5 flex items-center justify-center">
                                <IconComponent 
                                    className="text-red-500" 
                                    size={36} 
                                    strokeWidth={1.5} 
                                />
                            </div>
                            <h3
                                className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-extrabold mb-3"
                                aria-label={`Número de ${item.title}`}
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                }}
                            >
                                {formatNumber(count[idx])}
                            </h3>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">{item.description}</p>
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
                    className="inline-flex items-center justify-center bg-red-500 text-white py-4 px-8 text-xl transition duration-300 hover:bg-red-600 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full shadow-md hover:shadow-lg"
                    aria-label="Conheça nossos serviços"
                >
                    Descubra Nossos Serviços
                </a>
            </motion.div>
        </section>
    );
};

export default Statistics;