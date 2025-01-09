import React from "react";

// Componentes principais
import Footer from "../components/HeaderFooter/Footer";
import Carousel from "../components/AcessoriaLsg/HomeVideosClinetes";
import ClientAvaliacao from "../components/AcessoriaLsg/ClientAvaliacao";
import ImageCarousel from "../components/AcessoriaLsg/DepoimentosMensagem";
import Servicos from "../components/AcessoriaLsg/Servicos";
import SeloSection from "../components/AcessoriaLsg/SeloSection";
import Statistics from "../components/AcessoriaLsg/Statistics";
import ChatbotSection from "../components/AcessoriaLsg/ChatbotSection";
import CertificationSection from "../components/AcessoriaLsg/Certificados";
import ClientesParceiros from "../components/AcessoriaLsg/ClientesParceiros";
import CookieConsent from '../components/Ferramentas/CookieConsent';
import WhatsAppButton from '../components/Buttons/WhatsAppButton';
import HeroSection from '../components/AcessoriaLsg/HeroSection';
import FaqSection from '../components/AcessoriaLsg/FaqSection';
import FormularioContato from '../components/Formularios/FormularioContato';
import MarqueeSection from '../components/AcessoriaLsg/MarqueeSection';

const Home = () => {

  const momentsItems = [
    "Anúncios no Google Ads - Sua marca no topo das buscas",
    "Facebook Ads segmentado - Atraia o público ideal para seu negócio",
    "Aumento de ROI em Google Ads - Transforme cliques em conversões",
    "Consultoria especializada - Estratégias de tráfego pago para você",
    "Marketing digital para negócios locais - Conquiste sua cidade",
    "Geração de leads - Campanhas eficazes para o seu sucesso",
  ];

  return (
    <>
      <HeroSection />
      <Carousel />
      <ClientesParceiros />
      <Servicos />
      <MarqueeSection items={momentsItems} />
      <Statistics />
            <MarqueeSection items={momentsItems} />

      <ImageCarousel />
      <ChatbotSection />
      <CertificationSection />
      <ClientAvaliacao />
      <SeloSection />
      <FaqSection />
      <FormularioContato />
      <Footer />
      <CookieConsent />
      <div className="fixed bottom-5 right-5 z-40">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
