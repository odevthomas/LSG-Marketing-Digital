import React from 'react';
import '../../styles/PartnerComponent.css'; // Importando o CSS

const PartnerComponent = () => {
  const partners = [
    {
      name: 'Google Ads',
      description: `Especializados em campanhas digitais eficazes, ajudando empresas a crescer e alcançar seus objetivos de marketing.`,
      additionalInfo: `Apenas 3% das empresas brasileiras são Google Partner Premier.`,
      logo: 'https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg'
    },
    {
      name: 'Meta Business',
      description: `O Meta Business Partner Certified Company é um selo de qualidade que garante expertise em marketing digital da Meta e está altamente capacitada para ajudar as empresas.`,
      additionalInfo: `De acordo com dados da Meta, apenas 1% das empresas possuem esse certificado.`,
      logo: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png'
    },
    {
      name: 'Kommo',
      description: `Soluções personalizadas com a plataforma CRM da Kommo, proporcionando um atendimento mais eficaz e com maior taxa de conversão.`,
      additionalInfo: `Apenas 5% das empresas possuem este certificado.`,
      logo: "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png",
    }
  ];

  return (
    <div className="partner-container">
      {partners.map((partner, index) => (
        <div className="partner" key={index}>
          <img className="partner-logo" src={partner.logo} alt={partner.name} />
          <div className="partner-info">
            <h2>{partner.name}</h2>
            <p>{partner.description}</p>
            <p className="additional-info">{partner.additionalInfo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerComponent;
