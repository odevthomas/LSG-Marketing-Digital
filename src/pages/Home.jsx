import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import PrintMenagem from '../components/AcessoriaLsg/PrintMenagem';
import ServicePlans from '../components/AcessoriaLsg/ServicePlans';

const Home = () => {
  const momentsItems1 = [
    "Otimização de SEO - Melhore seu ranqueamento no Google",
    "Marketing de Conteúdo - Atraia visitantes com conteúdo relevante",
    "Anúncios no Google Ads - Amplie sua visibilidade online",
    "Estratégias de Link Building - Fortaleça sua autoridade online",
    "Análise de Concorrentes - Conheça suas vantagens competitivas",
    "Consultoria Digital Personalizada - Soluções sob medida",
  ];

  const momentsItems2 = [
    "Facebook Ads segmentados - Alcance seu público-alvo com precisão",
    "Campanhas no Instagram - Impulsione seu negócio com anúncios visuais",
    "Aumento de ROI em Google Ads - Transforme cliques em conversões",
    "Gestão de Redes Sociais - Engaje seu público de forma efetiva",
    "Criação de Conteúdo Digital - Histórias que conectam",
    "Marketing de Influência - Amplie seu alcance com parcerias estratégicas",
  ];

  const momentsItems3 = [
    "Remarketing - Reengaje clientes que já visitaram seu site",
    "SEO Local - Conquiste seu mercado local com otimização para busca",
    "Anúncios no YouTube - Expanda sua marca com vídeos impactantes",
    "Otimização de Conversão - Aumente suas taxas de conversão",
    "Marketing de Performance - Resultados mensuráveis e escaláveis",
    "Estratégia de Conteúdo - Planejamento editorial eficiente",
  ];

  const momentsItems4 = [
    "Google Analytics - Acompanhe o desempenho das suas campanhas",
    "SEO On-Page - Melhore a estrutura do seu site para buscas",
    "Meta Ads - Conquiste mais clientes no Facebook e Instagram",
    "Automação de Marketing - Otimize seus processos",
    "Landing Pages Otimizadas - Páginas que convertem",
    "Monitoramento de Marca - Gestão de reputação online",
  ];

  const momentsItems5 = [
    "Pesquisa de palavras-chave - Encontre os termos certos para o SEO",
    "Campanhas de e-mail marketing - Engaje sua base de clientes",
    "Tráfego pago - Aumente suas vendas com anúncios eficientes",
    "Copywriting Persuasivo - Textos que vendem",
    "Funil de Vendas Digital - Jornada do cliente otimizada",
    "Análise de Dados - Decisões baseadas em informações",
    "Branding Digital - Construção de marca forte",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <div className="relative z-10">
        <HeroSection />
        <Statistics />
        <MarqueeSection items={momentsItems1} />
        <Carousel />
        <ClientesParceiros />
        <ChatbotSection />
        <Servicos />
        <MarqueeSection items={momentsItems2} />
        <ImageCarousel />
        <MarqueeSection items={momentsItems3} />
        <ServicePlans />
        <CertificationSection />
        <ClientAvaliacao />
        <MarqueeSection items={momentsItems4} />
        <PrintMenagem />
        <FaqSection />
        <SeloSection />
        <FormularioContato />
        <Footer />
        <CookieConsent />
        
        <div className="fixed bottom-5 right-5 z-40">
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
