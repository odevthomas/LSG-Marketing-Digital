import React, { useState } from "react";
import { ChevronDown, ChevronUp, Target, DollarSign, LayoutDashboard, MessageSquareMore, Users, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      icon: <Target className="w-8 h-8 text-[#f11414]" />,
      question: "Tráfego Pago: Como Impulsionar Meu Negócio?",
      answer: "Desenvolvemos estratégias precisas de anúncios no Google Ads e Facebook Ads para gerar tráfego qualificado, aumentando conversões e visibilidade com resultados mensuráveis e alto impacto.",
      id: "faq-trafego-pago"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#f11414]" />,
      question: "Funil de Vendas: Transformação de Leads?",
      answer: "Otimizamos cada etapa do funil de vendas, nutrindo leads de forma inteligente e transformando interesse em vendas através de estratégias de marketing digital personalizadas e de alta performance.",
      id: "faq-funil-vendas"
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-[#f11414]" />,
      question: "Landing Page: Qual Seu Verdadeiro Poder?",
      answer: "Criamos landing pages estratégicas que capturam atenção instantânea, direcionam o usuário com precisão e maximizam a taxa de conversão através de design moderno e copywriting persuasivo.",
      id: "faq-landing-page"
    },
    {
      icon: <MessageSquareMore className="w-8 h-8 text-[#f11414]" />,
      question: "Chatbot Inteligente: Benefícios Reais?",
      answer: "Implemente um atendimento automatizado de ponta, com respostas instantâneas, melhorando significativamente a experiência do cliente e otimizando sua comunicação digital.",
      id: "faq-chatbot"
    },
    {
      icon: <Users className="w-8 h-8 text-[#f11414]" />,
      question: "CRM: Como Gerenciar Relacionamentos?",
      answer: "Centralize informações, personalize interações e potencialize a fidelização através de uma gestão de clientes inteligente, orientada por dados e análises estratégicas.",
      id: "faq-crm"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#f11414]" />,
      question: "Presença Digital: Como Elevar Minha Marca?",
      answer: "Combinamos SEO avançado, marketing de conteúdo e publicidade direcionada para construir uma marca digital robusta, aumentando alcance, engajamento e autoridade no mercado.",
      id: "faq-presenca-digital"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight font-satoshi">
            Dúvidas <span className="text-[#f11414]">Frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore nossas soluções e descubra como podemos impulsionar seu negócio
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full"
              >
                <div className="flex items-center justify-between p-6 w-full">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-red-50">
                      {faq.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-left">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 ${expanded === index ? 'text-[#f11414]' : 'text-gray-400'}`} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
