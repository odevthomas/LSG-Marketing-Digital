const ClientCard = ({ imgSrc, name, description }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-900 border p-4 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
        <img
          alt="team"
          className="w-16 h-16 bg-bla-900 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={imgSrc}
        />
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-black">{name}</h2>
          <p className="text-sm text-black">{description}</p>
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
    <section className="bg-white text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-15">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Clientes que Transformaram Seus Negócios com a LSG Digital
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
            Veja como nossos clientes estão alcançando novos patamares de sucesso com a LSG Digital, a força por trás do seu crescimento!
          </p>
        </div>
        <div className="flex flex-wrap mb-12">
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
