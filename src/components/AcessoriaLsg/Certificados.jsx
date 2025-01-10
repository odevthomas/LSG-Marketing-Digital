import React from 'react';

const PartnerComponent = () => {
  const partners = [
    {
      name: 'Google Ads',
      description: (
        <>
          Especializados em <span className="font-semibold text-[#ffff]">campanhas digitais eficazes</span>, ajudando
          empresas a alcançar seus <span className="font-semibold text-[#ffff]">objetivos de marketing</span>.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="font-semibold text-[#ffff]">3%</span> das empresas brasileiras são{' '}
          <span className="font-semibold text-[#ffff]">Google Partner Premier</span>.
        </>
      ),
      logo: 'https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg',
      actionText: "Aumente seu ROI com o Google Ads!",
      whatsappMessage: "Oi, vim pelo site e quero aumentar meu ROI com o Google Ads.",
      phone: '5519981331191',  // Número de WhatsApp para o Google Ads
    },
    {
      name: 'Meta Business',
      description: (
        <>
          O <span className="font-semibold text-[#ffff]">Meta Business Partner Certified Company</span> é um selo de
          qualidade que garante <span className="font-semibold text-[#ffff]">expertise</span> em marketing digital da Meta
          e está altamente capacitada para ajudar as empresas.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="font-semibold text-[#ffff]">1%</span> das empresas possuem esse{' '}
          <span className="font-semibold text-[#ffff]">certificado</span>.
        </>
      ),
      logo: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png',
      actionText: "Seja um parceiro Meta e amplie seu alcance!",
      whatsappMessage: "Oi, vim pelo site e quero aprender mais sobre parcerias com o Meta Business.",
      phone: '5519981331192',  // Número de WhatsApp para o Meta Business
    },
    {
      name: 'Kommo',
      description: (
        <>
          Soluções personalizadas com a plataforma <span className="font-semibold text-[#ffff]">CRM</span> da Kommo,
          proporcionando um <span className="font-semibold text-[#ffff]">atendimento mais eficaz</span> e com maior{' '}
          <span className="font-semibold text-[#ffff]">taxa de conversão</span>.
        </>
      ),
      additionalInfo: (
        <>
          Apenas <span className="font-semibold text-[#ffff]">5%</span> das empresas possuem este{' '}
          <span className="font-semibold text-[#ffff]">certificado</span>.
        </>
      ),
      logo: 'https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png',
      actionText: "Transforme o relacionamento com seus clientes com CRM!",
      whatsappMessage: "Oi, vim pelo site e quero saber mais sobre o CRM da Kommo.",
      phone: '5519981331193',  // Número de WhatsApp para o Kommo
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 bg-gradient-to-b from-[#000] to-[#000]">
      {/* Título e Subtítulo */}
      <h3 className="text-center text-4xl font-extrabold text-white mb-6">
        Nossos Parceiros de Confiança
      </h3>
      <p className="text-center text-lg text-gray-300 mb-12">
        Trabalhe com empresas líderes que são especializadas em ajudar o seu negócio a crescer com soluções de marketing poderosas.
      </p>

      <div className="flex justify-center">
        <div className="space-y-12 w-full max-w-4xl">
          {partners.map((partner, index) => (
            <div
              className="flex flex-col items-center p-6 bg-[#000] text-white rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <div className="w-full flex justify-center mb-6">
                <img
                  className="w-full h-auto max-w-48 max-h-48 object-cover rounded-2xl "
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>

              <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold">{partner.name}</h2>
                <p className="text-md">{partner.description}</p>
                <p className="text-sm italic text-gray-400">{partner.additionalInfo}</p>

                {/* Botão de ação com link do WhatsApp */}
                <a
                  href={`https://wa.me/${partner.phone}?text=${encodeURIComponent(partner.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fb1603] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#e64012] transform hover:scale-105 transition-all duration-300 shadow-lg mt-6 inline-block"
                >
                  {partner.actionText}
                </a>
              </div>
            </div>
          ))}
        </div>
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
