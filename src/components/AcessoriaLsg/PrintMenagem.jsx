import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

const PrintMensagens = () => {
  const PrintMensagens = [
    { image: "/Criativos/print1.png", service: "Funil de Vendas" },
    { image: "/Criativos/print2.png", service: "Campanhas Digitais" },
  ];

  const handleWhatsAppMessage = (service) => {
    const message = `Olá, estou interessado no serviço de ${service}. Gostaria de mais informações. Este interesse veio de um feedback diário.`;
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
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Feedbacks <span className="text-[#fb1603]">Diários</span> dos Nossos Clientes
        </motion.h2>

        <motion.p
          className="text-gray-300 text-xl md:text-2xl mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Veja as mensagens que recebemos diariamente dos nossos clientes
        </motion.p>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={20}  // Espaçamento entre os slides
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
              spaceBetween: 10,  // Menor espaçamento
            },
            1024: {
              slidesPerView: 1,  // 1 imagem por vez em telas grandes
              spaceBetween: 20,  // Espaçamento maior
            },
          }}
        >
          {PrintMensagens.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col justify-center p-4 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Container do navegador Mac simplificado */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    {/* Barra superior do navegador Mac */}
                    <div className="bg-[#f5f5f5] px-4 py-2 flex items-center border-b border-[#e0e0e0]">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D4A02C]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#24AA36]"></div>
                      </div>
                      {/* Barra de URL simplificada */}
                      <div className="ml-4 flex-1 mx-auto max-w-2xl">
                        <div className="bg-[#e8e8e8] rounded-md h-7 flex items-center px-3">
                          <img src="/favicon.png" alt="LSG favicon" className="w-4 h-4 mr-2" />
                          <span className="text-[#333] text-sm">www.lsgdigital.com.br</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Imagem */}
                    <motion.img
                      src={item.image}
                      alt={`Feedback de Cliente - ${item.service}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Botão para enviar mensagem no WhatsApp */}
                <div className="mt-4">
                  <button
                    onClick={() => handleWhatsAppMessage(item.service)}
                    className="w-full px-6 py-3 mt-4 text-sm sm:text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb1603] rounded-full hover:bg-[#fb1603] focus:outline-none focus:ring focus:ring-[#fb1603] focus:ring-opacity-50"
                  >
                    Quero saber mais sobre {item.service}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação personalizadas */}
        <div className="flex justify-center gap-4 mt-8">
          {PrintMensagens.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 transform ${
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

export default PrintMensagens;
