import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
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
      className="py-16 bg-gradient-to-b from-[#000] to-[#000] text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Título e Subtítulo */}
        <motion.h3
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços Essenciais para Impulsionar seu Sucesso
        </motion.h3>

        <motion.p
          className="text-[#0a0a0a] text-lg mt-10 sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Descubra como podemos transformar o seu negócio com soluções digitais inovadoras e eficientes.
        </motion.p>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}  // Exibe 1 imagem por vez
          loop={true}  // O carrossel irá continuar rolando infinitamente
          autoplay={{
            delay: 2500, // Atraso de 2.5 segundos antes de trocar a imagem
            disableOnInteraction: false, // Não desativar a rotação ao interagir com o carrossel
          }}
          pagination={{ clickable: true }}  // Ativa a navegação por bolinhas
          breakpoints={{
            640: {
              slidesPerView: 1,  // 1 imagem por vez em telas pequenas
            },
            1024: {
              slidesPerView: 1,  // 1 imagem por vez em telas grandes
            },
            1440: {
              slidesPerView: 1,  // Exibe 1 imagem por vez em telas extra grandes
            },
          }}
        >
          {ServicosItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col justify-center p-6 transition duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Imagem do serviço */}
                <motion.img
                  src={item.image}
                  alt={`Serviço ${index + 1}`}
                  className="w-full h-[450px] object-cover rounded-3xl border-1 border-[#99999969] shadow-lg"
                />
                {/* Botão para enviar mensagem no WhatsApp */}
                <div className="mt-4">
                  <button
                    onClick={() => handleWhatsAppMessage(item.service)}
                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb1603] rounded-full hover:bg-[#fb1603] focus:outline-none focus:ring focus:ring-[#fb1603] focus:ring-opacity-50"
                    aria-label={`Clique para saber mais sobre o serviço de ${item.service}`}
                  >
                    Quero saber mais sobre {item.service}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação personalizadas (se necessário) */}
        <div className="flex justify-center gap-4 mt-8">
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
