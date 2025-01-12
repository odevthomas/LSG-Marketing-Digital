import React from 'react';  
import Slider from 'react-slick';  
import { FaQuoteRight } from 'react-icons/fa'; // Importando ícone de citação

// Componente do cartão do cliente
const ClientCard = ({ imgSrc, name, description, slogan }) => {
  return (
    <div className="p-4 sm:p-6 flex flex-col items-center border-[#3a3a3a] border p-6 rounded-xl bg-[#fff] shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        alt={`Imagem de ${name}`}
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover object-center rounded-full shadow-md border-2 border-[#fff] mb-2"
        src={imgSrc}
      />
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-light text-[#000001] mb-2">{name}</h3> {/* Fonte mais fina */}
        <p className="text-sm sm:text-base text-[#000001] mb-2">{description}</p> {/* Fonte mais leve */}
        <div className="text-[#000001] mt-2 flex items-center justify-center italic">
          <FaQuoteRight size={18} className="inline-block mr-2 text-[#000001]" />
          <span className="font-light text-lg sm:text-xl">{slogan}</span> {/* Fonte mais fina */}
        </div>
      </div>
    </div>
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

  // Configurações do carrossel sem setas
  const settings = {
    dots: true,
    arrows: false,  // Removendo as setas de navegação
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
    <section className="bg-gradient-to-b from-[#040404] to-[#0000000a] opacity-90 py-4 sm:py-6"> {/* Menor padding */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Título alinhado à esquerda */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-white leading-tight uppercase mb-4 sm:mb-6 text-center">
          Empresas que Alavancaram Seus Resultados!
        </h3>

        {/* Texto de descrição centralizado */}
        <p className="mt-2 sm:mt-4 text-[#ffff] text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
          Veja Como Nossos Serviços Impulsionaram o Sucesso de Antigos e Novos Clientes!
        </p>

        <Slider {...settings} className="mt-6 sm:mt-8">
          {clients.map((client, index) => (
            <div key={index} className="px-2 sm:px-4"> {/* Ajuste no gap entre os cartões */}
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

export default ClientesParceiros;
