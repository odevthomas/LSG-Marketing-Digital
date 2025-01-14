import React from 'react';

const PartnerComponent = () => {
  const partners = [
    // ... (your partners array remains unchanged)
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-b from-[#000] to-[#111]">
      <h3 className="text-center text-4xl font-extrabold text-white mb-6">
        Nossos Parceiros de Confiança
      </h3>
      <p className="text-center text-lg text-gray-300 mb-12">
        Trabalhe com empresas líderes que são especializadas em ajudar o seu negócio a crescer com soluções de marketing poderosas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {partners.map((partner, index) => (
          <div
            className="flex flex-col items-center p-6 bg-[#111] text-white rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            key={index}
          >
            <div className="w-full flex justify-center mb-6">
              <img
                className="w-32 h-32 object-cover rounded-full shadow-lg"
                src={partner.logo}
                alt={partner.name}
              />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold">{partner.name}</h2>
              <p className="text-md">{partner.description}</p>
              <p className="text-sm italic text-gray-400">{partner.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão CTA Final */}
      <div className="mt-12 text-center">
        <a
          href="#"
          className="bg-[#fb1603] text-white py-4 px-6 sm:px-10 rounded-full text-xl font-semibold hover:bg-[#e64012] transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Comece Agora e Transforme Seu Negócio!
        </a>
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