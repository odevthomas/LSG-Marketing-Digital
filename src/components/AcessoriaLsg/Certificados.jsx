import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PartnerComponent = () => {
    const partners = [
        {
            name: 'Google Ads',
            description: 'Maximize seu ROI com estratégias de marketing digital de ponta.',
            highlights: [
                'Campanhas otimizadas',
                'Targeting preciso',
                'Resultados mensuráveis'
            ],
            logo: 'https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg',
            actionText: "Impulsione seus Resultados",
            whatsappMessage: "Quero aumentar meu ROI com Google Ads",
            phone: '5519981331191',
            expertise: '3% das empresas são Google Partner Premier'
        },
        {
            name: 'Meta Business',
            description: 'Expanda sua presença digital com soluções de marketing social.',
            highlights: [
                'Estratégias criativas',
                'Segmentação avançada',
                'Engajamento de marca'
            ],
            logo: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png',
            actionText: "Conecte-se com seu Público",
            whatsappMessage: "Quero ampliar meu alcance no Meta Business",
            phone: '5519981331192',
            expertise: '1% possuem certificação Meta'
        },
        {
            name: 'Kommo CRM',
            description: 'Transforme relacionamentos com inteligência em gestão de clientes.',
            highlights: [
                'Automação de processos',
                'Análise de performance',
                'Experiência personalizada'
            ],
            logo: 'https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png',
            actionText: "Revolucione seu CRM",
            whatsappMessage: "Quero otimizar meu atendimento com Kommo",
            phone: '5519981331193',
            expertise: '5% das empresas certificadas'
        }
    ];

    return (
        <section 
            className="bg-black text-white py-16 px-4"
            aria-labelledby="partners-title"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    id="chatbot-title"
                    className="text-5xl md:text-6xl font-black text-white mb-16 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Transforme seu Atendimento com
                    <br />
                    <span className="text-[#f11414]">Soluções Certificadas</span>
                    <motion.span
                        className="block text-2xl md:text-3xl mt-4 font-medium text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Parceiros Oficiais Google, Meta e Kommo
                    </motion.span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="bg-[#111] rounded-2xl p-6 transform transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <img 
                                    src={partner.logo} 
                                    alt={`Logo ${partner.name}`} 
                                    className="w-20 h-20 rounded-full mr-4 object-cover"
                                    style={{ boxShadow: 'none' }}
                                />
                                <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                            </div>

                            <p className="text-gray-100 mb-4 font-medium">{partner.description}</p>

                            <div className="mb-4">
                                {partner.highlights.map((highlight, idx) => (
                                    <div 
                                        key={idx} 
                                        className="flex items-center text-[#f11414] mb-2"
                                    >
                                        <FaCheckCircle className="mr-2" />
                                        <span className="text-white font-medium">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-sm italic text-gray-200 mb-4 font-medium">
                                {partner.expertise}
                            </div>

                            <a 
                                href={`https://wa.me/${partner.phone}?text=${encodeURIComponent(partner.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-[#f11414] text-white py-3 rounded-full hover:bg-[#b23012] transition-colors"
                                aria-label={`Fale sobre ${partner.name}`}
                            >
                                <FaWhatsapp className="inline-block mr-2 text-xl" />
                                {partner.actionText}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl font-semibold text-white">
                        Transforme sua estratégia com parceiros de excelência
                    </p>
                    <p className="text-gray-400 mt-4">
                        Soluções certificadas para impulsionar seu negócio
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PartnerComponent;