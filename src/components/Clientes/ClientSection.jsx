import React from 'react';  // Adicione esta linha no início do arquivo

const ClientCard = ({ imgSrc, name, description }) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
      <div className="flex items-center border-gray-300 border p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
        <img
          alt={name}
          className="w-20 h-20 object-cover object-center rounded-full shadow-md border-2 border-gray-300"
          src={imgSrc}
        />
        <div className="flex-grow pl-6">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ClientSection = () => {
  const clients = [
    {
      imgSrc: "/ImgInstagram/luizgoncalvesconnection.jpg",
      name: "Luiz Gonçalves Connection",
      description: "Consultoria em Conexões Digitais"
    },
    {
      imgSrc: "/ImgInstagram/novo_olhar_revelesuabeleza.jpg",
      name: "Novo Olhar",
      description: "Beleza e Transformação Visual"
    },
    {
      imgSrc: "/ImgInstagram/dconceptbr.jpg",
      name: "DConcept BR",
      description: "Design e Consultoria de Branding"
    },
    {
      imgSrc: "/ImgInstagram/casavrsalao.jpg",
      name: "Casa VR Salão",
      description: "Beleza e Estilo para Todos"
    },
    {
      imgSrc: "/ImgInstagram/Floya.jpg",
      name: "Floya Design",
      description: "Design de Interiores e Estilo"
    },
    {
      imgSrc: "/ImgInstagram/amovacinasoficial.jpg",
      name: "Amo Vacinas",
      description: "Promoção da Saúde e Bem-estar"
    },
    {
      imgSrc: "/ImgInstagram/inbeautyluxury.jpg",
      name: "InBeauty Luxury",
      description: "Beleza Premium e Cuidados"
    }
  ];

  return (
    <section className="bg-[#FFF] py-16">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <h3 className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#000]">
          Clientes que Transformaram   <span className="text-[#81ff94]"> Seus Negócios!</span> 
        </h3>
        <p className="mt-2 text-[#333] text-lg sm:text-xl md:text-2xl leading-relaxed">
          Veja como nossos clientes estão alcançando novos patamares de sucesso com a LSG Digital, a força por trás do seu crescimento!
        </p>

        <div className="flex flex-wrap justify-center mb-12">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              imgSrc={client.imgSrc}
              name={client.name}
              description={client.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
