import React from 'react';  
import Slider from 'react-slick';  
import { FaQuoteRight } from 'react-icons/fa'; // Importando ícone de citação

// Componente do cartão do cliente
const ClientCard = ({ imgSrc, name, description, slogan }) => {
  return (
    <div className="p-4 flex flex-col items-center border-gray-900 border p-6 rounded-lg bg-[#000000a0] shadow-md">
      <img
        alt={`Imagem de ${name}`}
        className="w-24 h-24 object-cover object-center  rounded-full shadow-md border-2 border-gray-800 mb-4"
        src={imgSrc}
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-300">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-gray-600 mt-2 flex items-center justify-center italic">
          <FaQuoteRight size={16} className="inline-block mr-1" />
          <span>{slogan}</span>
        </div>
      </div>
    </div>
  );
};

// Componente da seção de clientes
const ClientSection = () => {
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
      imgSrc: "/ImgInstagram/Hazap Informática.jpg",
      name: "Hazap Informática",
      description: "Soluções em Tecnologia",
      slogan: "Tecnologia que transforma!"
    },
    {
      imgSrc: "/ImgInstagram/casalellit.jpg",
      name: "Casa L’Ellit",
      description: "Beleza e Bem-estar",
      slogan: "Seu bem-estar é nossa missão!"
    },
  ];

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Ativando autoplay
    autoplaySpeed: 3000, // Tempo entre as transições
    cssEase: "linear", // Efeito de transição
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
   <section className="bg-gradient-to-b  via-[#fb1603] to-[#000] opacity-90">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 ">
        <h3 className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100 text-center">
          Clientes que Transformaram <span className="text-[#f7f7f7]"> Seus Negócios!</span> 
        </h3>
        <p className="mt-3 text-gray-100 text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
          Veja como nossos clientes estão alcançando novos patamares de sucesso com a LSG Digital, a força por trás do seu crescimento!
        </p>

        <Slider {...settings} className="mt-12 ">
          {clients.map((client, index) => (
            <div key={index} className="px-2  "> {/* Adicionando gap entre os cartões */}
              <ClientCard
                imgSrc={client.imgSrc}
                name={client.name}
                description={client.description}
                slogan={client.slogan}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSection;