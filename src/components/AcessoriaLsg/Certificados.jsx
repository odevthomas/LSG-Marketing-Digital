import React from 'react';

const PartnerComponent = () => {
  const partners = [
    {
      name: 'Google Ads',
      description: (
        <>
          Especializados em <span className="text-white font-bold">campanhas digitais eficazes</span>, ajudando
          empresas a alcançar seus <span className="text-white font-bold">objetivos de marketing</span>.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="text-white font-bold">3%</span> das empresas brasileiras são{' '}
          <span className="text-white font-bold">Google Partner Premier</span>.
        </>
      ),
      logo: 'https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg',
      actionText: "Aumente seu ROI com a Google Ads!",
    },
    {
      name: 'Meta Business',
      description: (
        <>
          O <span className="text-white font-bold">Meta Business Partner Certified Company</span> é um selo de
          qualidade que garante <span className="text-white font-bold">expertise</span> em marketing digital da Meta
          e está altamente capacitada para ajudar as empresas.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="text-white font-bold">1%</span> das empresas possuem esse{' '}
          <span className="text-white font-bold">certificado</span>.
        </>
      ),
      logo: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png',
      actionText: "Seja um parceiro Meta e amplie seu alcance!",
    },
    {
      name: 'Kommo',
      description: (
        <>
          Soluções personalizadas com a plataforma <span className="text-white font-bold">CRM</span> da Kommo,
          proporcionando um <span className="text-white font-bold">atendimento mais eficaz</span> e com maior{' '}
          <span className="text-white font-bold">taxa de conversão</span>.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="text-white font-bold">5%</span> das empresas possuem este{' '}
          <span className="text-white font-bold">certificado</span>.
        </>
      ),
      logo: 'https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png',
      actionText: "Transforme o relacionamento com seus clientes com CRM!",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 bg-black">
      {/* Título e Subtítulo */}
      <h3 className="text-center text-5xl font-bold text-white mb-4">
        Nossos Parceiros de Confiança
      </h3>
      <p className="text-center text-lg text-white mb-12">
        Trabalhe com empresas líderes que são especializadas em ajudar o seu negócio a crescer com soluções de marketing poderosas.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {partners.map((partner, index) => (
          <div
            className="flex flex-col items-center p-8 bg-black text-white rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-300 "
            key={index}
          >
            <div className="w-full flex justify-center mb-6">
              <img
                className="w-full h-auto max-w-48 max-h-48 object-cover rounded-2xl "
                src={partner.logo}
                alt={partner.name}
              />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">{partner.name}</h2>
              <p className="text-lg">{partner.description}</p>
              <p className="text-sm italic">{partner.additionalInfo}</p>

              <a
                href="#cta"
                className="text-black bg-white py-4 px-10 rounded-full font-semibold hover:bg-[#fb1603] hover:text-white transition duration-300 mt-6 inline-block shadow-lg"
              >
                {partner.actionText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-white">
          Junte-se a nós e aproveite as vantagens de ter parceiros certificados!
        </p>
      </div>
    </div>
  );
};

export default PartnerComponent;
