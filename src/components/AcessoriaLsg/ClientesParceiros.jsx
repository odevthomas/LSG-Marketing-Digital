import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Componente do cartão do cliente
const ClientCard = ({ imgSrc, name, description, slogan }) => {
  return (
    <motion.div 
      className="client-card group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 
      backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent opacity-75 rounded-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <motion.img
            alt={`Logo de ${name}`}
            className="w-24 h-24 object-cover object-center rounded-full 
            shadow-md"
            src={imgSrc}
            loading="lazy"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        
        <div className="text-white space-y-3">
          <h3 className="text-2xl font-bold text-white transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
            {description}
          </p>
          
          <div className="flex items-center justify-center text-white italic">
            <span className="font-medium text-base opacity-80">{slogan}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente da seção de clientes
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
      name: "AmorSaúde Brasis",
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
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const clientsPerPage = 6;

  const paginatedClients = clients.slice(
    currentPage * clientsPerPage, 
    (currentPage + 1) * clientsPerPage
  );

  const totalPages = Math.ceil(clients.length / clientsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Adicionar manipuladores de teclado
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') handleNextPage();
      if (e.key === 'ArrowLeft') handlePrevPage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black/95 py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
            Nossos Parceiros de Sucesso
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas que confiam em nossa visão e transformam seus negócios com estratégia e inovação.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {paginatedClients.map((client, index) => (
                <motion.div 
                  key={`${client.name}-${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClientCard
                    imgSrc={client.imgSrc}
                    name={client.name}
                    description={client.description}
                    slogan={client.slogan}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navegação de Páginas */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <motion.button 
              onClick={handlePrevPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-zinc-800 text-white p-3 rounded-full hover:bg-[#f11414] transition-colors"
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="text-white">
              Página {currentPage + 1} de {totalPages}
            </div>
            
            <motion.button 
              onClick={handleNextPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-zinc-800 text-white p-3 rounded-full hover:bg-[#f11414] transition-colors"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black font-bold text-lg 
            rounded-full hover:bg-gray-200 transition-all duration-300 
            flex items-center justify-center mx-auto shadow-2xl"
          >
            <FaCheckCircle className="mr-3 text-xl" />
            Transforme Seu Negócio Agora!
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientesParceiros;
