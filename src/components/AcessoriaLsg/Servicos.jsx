import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon, 
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  PresentationChartBarIcon
} from "@heroicons/react/24/solid";

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

const Servicos = () => {
  const ServicosItems = [
    { 
      icon: ChartBarIcon, 
      service: "Funil de Vendas", 
      description: "Otimize sua conversão com estratégias inteligentes de funil de vendas.",
      image: "/Criativos/funil.png" 
    },
    { 
      icon: RocketLaunchIcon, 
      service: "Campanhas Digitais", 
      description: "Impulsione sua marca com campanhas digitais de alto impacto.",
      image: "/Criativos/campanha.png" 
    },
    { 
      icon: ChatBubbleBottomCenterTextIcon, 
      service: "Gestão de CRM", 
      description: "Relacionamento estratégico com seus clientes através de CRM avançado.",
      image: "/Criativos/crm1.png" 
    },
    { 
      icon: DocumentTextIcon, 
      service: "Landing Pages", 
      description: "Páginas de conversão otimizadas para maximizar seus resultados.",
      image: "/Criativos/lp.png" 
    },
    { 
      icon: DevicePhoneMobileIcon, 
      service: "Chatbot Inteligente", 
      description: "Automatize o atendimento com chatbots inteligentes e personalizados.",
      image: "/Criativos/chatbot.png" 
    },
    { 
      icon: PresentationChartBarIcon, 
      service: "Postagens para Redes Sociais", 
      description: "Conteúdo estratégico para engajamento e crescimento digital.",
      image: "/Criativos/postagem.png" 
    },
  ];

  const handleWhatsAppMessage = (service) => {
    const message = `Olá, estou interessado no serviço de ${service}. Gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="servicos"
      className="py-16 bg-black text-white relative overflow-hidden"
    >
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a] opacity-90"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h3
          className="mt-2 block font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Serviços de Marketing Digital
        </motion.h3>

        <motion.p
          className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformamos desafios em oportunidades, conectando sua marca com estratégias digitais inovadoras e resultados mensuráveis.
        </motion.p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ServicosItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-[#1a1a1a] rounded-2xl p-6 m-4 border border-[#333] shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#fb1603]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <item.icon 
                    className="w-16 h-16 text-[#fb1603] mb-4" 
                  />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">
                  {item.service}
                </h4>
                
                <p className="text-gray-300 mb-4 h-20">
                  {item.description}
                </p>
                
                <button
                  onClick={() => handleWhatsAppMessage(item.service)}
                  className="w-full px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-[#fb1603] rounded-full hover:bg-[#e30f00] transition-all duration-300 transform hover:scale-105"
                >
                  Saiba Mais
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Servicos;