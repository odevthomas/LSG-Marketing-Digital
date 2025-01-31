import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaChartLine, 
  FaBullhorn, 
  FaCode, 
  FaLightbulb, 
  FaGlobeAmericas,
  FaNetworkWired
} from "react-icons/fa";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ClientCard = ({ client }) => (
  <motion.div 
    className="group bg-[#111] border border-[#222] rounded-2xl p-6 text-center 
               w-full max-w-[380px] h-auto min-h-[300px] flex flex-col justify-center items-center
               transform-gpu transition-all duration-500
               hover:bg-black relative overflow-hidden
               hover:shadow-[0_0_50px_rgba(0,0,0,0.3)]
               hover:border-[#333]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Conteúdo */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      <div className="flex justify-center mb-6">
        <div className="relative w-28 h-28 transform-gpu group-hover:scale-110 transition-transform duration-500">
          <img 
            src={client.imgSrc} 
            alt={client.name}
            className="w-full h-full rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 text-center
                     group-hover:text-white transition-colors duration-300">
        {client.name}
      </h3>
      
      <p className="text-base text-gray-400 text-center max-w-[80%] mx-auto
                   group-hover:text-gray-300 transition-colors duration-300">
        {client.description}
      </p>
    </div>
  </motion.div>
);

const ClientesParceiros = () => {
  const clients = [
    {
      imgSrc: "/ImgInstagram/luizgoncalvesconnection.jpg",
      name: "Luiz Gonçalves Connection",
      description: "Consultoria em Conexões Digitais",
      slogan: "Conectando você ao futuro!"
    },
    {
      imgSrc: "/ImgInstagram/novo_olhar_revelesuabeleza.jpg",
      name: "Novo Olhar",
      description: "Beleza e Transformação Visual",
      slogan: "Transforme-se, surpreenda-se!"
    },
    {
      imgSrc: "/ImgInstagram/dconceptbr.jpg",
      name: "DConcept BR",
      description: "Design e Consultoria de Branding",
      slogan: "Sua marca, nossa paixão!"
    },
    {
      imgSrc: "/ImgInstagram/casavrsalao.jpg",
      name: "Casa VR Salão",
      description: "Beleza e Estilo para Todos",
      slogan: "Beleza que inspira!"
    },
    {
      imgSrc: "/ImgInstagram/Floya.jpg",
      name: "Floya Design",
      description: "Design de Interiores e Estilo",
      slogan: "Espaços que contam histórias!"
    },
    {
      imgSrc: "/ImgInstagram/amovacinasoficial.jpg",
      name: "Amo Vacinas",
      description: "Promoção da Saúde e Bem-estar",
      slogan: "Saúde em primeiro lugar!"
    },
    {
      imgSrc: "/ImgInstagram/tominnicelli.jpg",
      name: "Tom Minnicelli",
      description: "Coiffeur Coloriste",
      slogan: "Cores que encantam!"
    },
    {
      imgSrc: "/ImgInstagram/marina.cleff.jpg",
      name: "Marina Cleff",
      description: "Micropigmentação e Tattoos",
      slogan: "Arte na pele!"
    },
    {
      imgSrc: "/ImgInstagram/gilbarbosabeautycenter.jpg",
      name: "Gil Barbosa",
      description: "Beauty Center",
      slogan: "Beleza para todos!"
    },
    {
      imgSrc: "/ImgInstagram/José Bernardo Denig.jpg",
      name: "José Bernardo Denig",
      description: "Médico",
      slogan: "Cuidando de você!"
    },
    {
      imgSrc: "/ImgInstagram/olenkacosmeticoscampinas.jpg",
      name: "Kell Cosméticos",
      description: "Saúde/beleza",
      slogan: "𝘋𝘪𝘴𝘵𝘳𝘪𝘣𝘶𝘪𝘥𝘰𝘳𝘢 𝘈𝘶𝘵𝘰𝘳𝘪𝘻𝘢𝘥𝘢!"
    },
    {
      imgSrc: "/ImgInstagram/amorsaudebrasil.jpg",
      name: "AmorSaúde Brasil",
      description: "Saúde/beleza",
      slogan: "Medicina - Odontologia - Exames"
    },
    {
      imgSrc: "/ImgInstagram/Hazap Informática.jpg",
      name: "Hazap Informática",
      description: "Soluções em Tecnologia",
      slogan: "Tecnologia que transforma!"
    },
    {
      imgSrc: "/ImgInstagram/casalellit.jpg",
      name: "Casa L'Ellit",
      description: "Beleza e Bem-estar",
      slogan: "Seu bem-estar é nossa missão!"
    },
    {
      imgSrc: "/ImgInstagram/royalpalmplazaresort.jpg",
      name: "Royal Palm Plaza Resort",
      description: "Resort & Hospitalidade",
      slogan: "Excelência em hospitalidade!"
    }
  ];

  return (
    <section className="bg-black py-20 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000] to-[#111] opacity-90 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nossos Parceiros
        </motion.h2>

        <motion.p 
          className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Empresas que confiam em nosso trabalho para impulsionar sua presença digital
        </motion.p>

        {/* Primeiro Swiper - Direção normal */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          centeredSlides={false}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mb-8"
        >
          {clients.slice(0, Math.ceil(clients.length / 2)).map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Segundo Swiper - Direção reversa */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          centeredSlides={false}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
        >
          {clients.slice(Math.ceil(clients.length / 2)).map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientesParceiros;
