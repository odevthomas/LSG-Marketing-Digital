import React, { useState } from "react";
import { ChevronDown, ChevronUp, Target, DollarSign, LayoutDashboard, MessageSquareMore, Users, Globe } from "lucide-react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: (
        <span className="flex items-center gap-2">
          <Target className="w-6 h-6 text-[#f11414]" />
          Tráfego Pago: Como Impulsionar Meu Negócio?
        </span>
      ),
      answer: "Desenvolvemos estratégias precisas de anúncios no Google Ads e Facebook Ads para gerar tráfego qualificado, aumentando conversões e visibilidade com resultados mensuráveis e alto impacto.",
      id: "faq-trafego-pago"
    },
    {
      question: (
        <span className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-[#f11414]" />
          Funil de Vendas: Transformação de Leads?
        </span>
      ),
      answer: "Otimizamos cada etapa do funil de vendas, nutrindo leads de forma inteligente e transformando interesse em vendas através de estratégias de marketing digital personalizadas e de alta performance.",
      id: "faq-funil-vendas"
    },
    {
      question: (
        <span className="flex items-center gap-2">
          <LayoutDashboard className="w-6 h-6 text-[#f11414]" />
          Landing Page: Qual Seu Verdadeiro Poder?
        </span>
      ),
      answer: "Criamos landing pages estratégicas que capturam atenção instantânea, direcionam o usuário com precisão e maximizam a taxa de conversão através de design moderno e copywriting persuasivo.",
      id: "faq-landing-page"
    },
    {
      question: (
        <span className="flex items-center gap-2">
          <MessageSquareMore className="w-6 h-6 text-[#f11414]" />
          Chatbot Inteligente: Benefícios Reais?
        </span>
      ),
      answer: "Implemente um atendimento automatizado de ponta, com respostas instantâneas, melhorando significativamente a experiência do cliente e otimizando sua comunicação digital.",
      id: "faq-chatbot"
    },
    {
      question: (
        <span className="flex items-center gap-2">
          <Users className="w-6 h-6 text-[#f11414]" />
          CRM: Como Gerenciar Relacionamentos?
        </span>
      ),
      answer: "Centralize informações, personalize interações e potencialize a fidelização através de uma gestão de clientes inteligente, orientada por dados e análises estratégicas.",
      id: "faq-crm"
    },
    {
      question: (
        <span className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-[#f11414]" />
          Presença Digital: Como Elevar Minha Marca?
        </span>
      ),
      answer: "Combinamos SEO avançado, marketing de conteúdo e publicidade direcionada para construir uma marca digital robusta, aumentando alcance, engajamento e autoridade no mercado.",
      id: "faq-presenca-digital"
    }
  ];

  return (
    <section 
      className="bg-white py-16 sm:py-20 relative overflow-hidden" 
      aria-labelledby="faq-section-title"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 
          id="faq-section-title" 
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black tracking-tight font-satoshi"
        >
          Perguntas <span className="text-[#f11414]">Estratégicas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#f11414]/20"
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="flex items-center justify-between w-full p-5 sm:p-6 text-left group"
                aria-expanded={expanded === index}
                aria-controls={faq.id}
              >
                <h3 className="font-semibold text-lg sm:text-xl text-black group-hover:text-[#f11414] transition-colors font-satoshi">
                  {faq.question}
                </h3>
                <span 
                  className="ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-[#f11414]/10 transition-colors"
                  aria-hidden="true"
                >
                  {expanded === index ? (
                    <ChevronUp className="w-6 h-6 text-black group-hover:text-[#f11414]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black group-hover:text-[#f11414]" />
                  )}
                </span>
              </button>

              {expanded === index && (
                <div 
                  id={faq.id} 
                  className="border-t border-gray-200 bg-gray-50/50"
                >
                  <p className="p-5 sm:p-6 text-base sm:text-lg text-gray-800 font-satoshi">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
