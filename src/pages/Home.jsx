import React, { useState, useEffect } from "react";

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
import CouponModal from '../components/Ferramentas/ModalComponent';
import PrintMenagem from '../components/AcessoriaLsg/PrintMenagem';
import ServicePlans from '../components/AcessoriaLsg/ServicePlans';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Variáveis de texto para cada MarqueeSection
  const momentsItems1 = [
    "Otimização de SEO - Melhore seu ranqueamento no Google",
    "Marketing de Conteúdo - Atraia visitantes com conteúdo relevante",
    "Anúncios no Google Ads - Amplie sua visibilidade online",
  ];

  const momentsItems2 = [
    "Facebook Ads segmentados - Alcance seu público-alvo com precisão",
    "Campanhas no Instagram - Impulsione seu negócio com anúncios visuais",
    "Aumento de ROI em Google Ads - Transforme cliques em conversões",
  ];

  const momentsItems3 = [
    "Remarketing - Reengaje clientes que já visitaram seu site",
    "SEO Local - Conquiste seu mercado local com otimização para busca",
    "Anúncios no YouTube - Expanda sua marca com vídeos impactantes",
  ];

  const momentsItems4 = [
    "Google Analytics - Acompanhe o desempenho das suas campanhas",
    "SEO On-Page - Melhore a estrutura do seu site para buscas",
    "Meta Ads - Conquiste mais clientes no Facebook e Instagram",
  ];

  const momentsItems5 = [
    "Pesquisa de palavras-chave - Encontre os termos certos para o SEO",
    "Campanhas de e-mail marketing - Engaje sua base de clientes",
    "Tráfego pago - Aumente suas vendas com anúncios eficientes",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Abre o modal após 3 segundos
    }, 8000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <>
      <HeroSection />
      
      <Statistics />

      {/* Primeiro MarqueeSection */}
      <MarqueeSection items={momentsItems1} />

      <Carousel />
      <ClientesParceiros />
      <ChatbotSection />
      <Servicos />

      {/* Segundo MarqueeSection */}
      <MarqueeSection items={momentsItems2} />

      <ImageCarousel />
      
      {/* Terceiro MarqueeSection */}
      <MarqueeSection items={momentsItems3} />

      <ServicePlans />

      <CertificationSection />
      <ClientAvaliacao />
      
      {/* Quarto MarqueeSection */}
      <MarqueeSection items={momentsItems4} />

      <PrintMenagem />
      <FaqSection />
      <SeloSection />
      <FormularioContato />
      <Footer />

      {/* Modal de Cupom */}
      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <CookieConsent />
      
      <div className="fixed bottom-5 right-5 z-40">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
