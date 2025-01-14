import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

const Servicos = () => {
  const ServicosItems = [
    { image: "/Criativos/funil.png", service: "Funil de Vendas" },
    { image: "/Criativos/campanha.png", service: "Campanhas Digitais" },
    { image: "/Criativos/crm1.png", service: "Gestão de CRM" },
    { image: "/Criativos/lp.png", service: "Landing Pages" },
    { image: "/Criativos/chatbot.png", service: "Chatbot Inteligente" },
    { image: "/Criativos/postagem.png", service: "Postagens para Redes Sociais" },
  ];

  const handleWhatsAppMessage = (service) => {
    const message = `Olá, estou interessado no serviço de ${service}. Gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="Servicos"
      className="py-8 bg-gradient-to-b from-black text-white" // Reduzido o padding vertical
    >
      <div className="container mx-auto px-6 text-center">
        {/* Título e Subtítulo */}
        <motion.h3
          className="mt-2 block font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-100" // Reduzido o tamanho do texto
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços Essenciais para Impulsionar seu Sucesso
        </motion.h3>

        <motion.p
          className="text-gray-300 text-lg mt-4 sm:text-xl leading-relaxed" // Ajustado o espaçamento e tamanho do texto
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Descubra como podemos transformar o seu negócio com soluções digitais inovadoras e eficientes.
        </motion.p>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={20} // Reduzido o espaço entre slides
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {ServicosItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center justify-center p-4 transition duration-500 ease-in-out" // Ajustado o padding
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Texto sobre o serviço */}
                <motion.h4
                  className="text-lg font-bold mb-2" // Ajustado o tamanho do texto
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.service}
                </motion.h4>
                
                {/* Imagem do serviço */}
                <motion.img
                  src={item.image}
                  alt={`Serviço ${index + 1}`}
                  className="w-full h-auto object-cover rounded-3xl border border-[#99999969] shadow-lg"
                />
                
                {/* Botão para enviar mensagem no WhatsApp */}
                <div className="mt-2">
                  <button
                    onClick={() => handleWhatsAppMessage(item.service)}
                    className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb1603] rounded-full hover:bg-[#e30f00] focus:outline-none focus:ring focus:ring-[#fb1603] focus:ring-opacity-50"
                  >
                    Quero saber mais sobre {item.service}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação personalizadas */}
        <div className="flex justify-center gap-4 mt-6">
          {ServicosItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                index === 0 ? "bg-[#a3a3a3]" : "bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;