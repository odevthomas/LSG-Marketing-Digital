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

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 const momentsItems = [
    "Otimização de SEO - Melhore seu ranqueamento no Google",
    "Marketing de Conteúdo - Atraia visitantes com conteúdo relevante",
    "Anúncios no Google Ads - Amplie sua visibilidade online",
    "Facebook Ads segmentados - Alcance seu público-alvo com precisão",
    "Campanhas no Instagram - Impulsione seu negócio com anúncios visuais",
    "Aumento de ROI em Google Ads - Transforme cliques em conversões",
    "Remarketing - Reengaje clientes que já visitaram seu site",
    "SEO Local - Conquiste seu mercado local com otimização para busca",
    "Anúncios no YouTube - Expanda sua marca com vídeos impactantes",
    "Google Analytics - Acompanhe o desempenho das suas campanhas",
    "SEO On-Page - Melhore a estrutura do seu site para buscas",
    "Meta Ads - Conquiste mais clientes no Facebook e Instagram",
    "Pesquisa de palavras-chave - Encontre os termos certos para o SEO",
    "Campanhas de e-mail marketing - Engaje sua base de clientes",
    "Tráfego pago - Aumente suas vendas com anúncios eficientes",
    "Anúncios responsivos - Melhore a experiência do usuário em dispositivos móveis",
    "Anúncios dinâmicos - Personalize suas campanhas para o público-alvo",
    "Otimização de taxa de conversão - Melhore o desempenho das suas páginas",
    "SEO Técnico - Garanta a indexação do seu site pelos motores de busca",
    "Google Shopping - Promova seus produtos diretamente nos resultados de busca",
    "Estratégias de tráfego pago - Atraia mais visitantes para seu site",
    "Automatização de anúncios - Torne sua publicidade mais eficiente",
    "Conversão de leads - Transforme visitantes em clientes pagantes",
    "Bing Ads - Expanda sua presença para além do Google",
    "Testes A/B - Melhore suas campanhas com testes de performance",
    "Bots de atendimento - Automatize o atendimento ao cliente",
    "Google Search Console - Monitore e melhore a saúde do seu site",
    "SEO de imagens - Torne suas imagens mais encontráveis nas buscas",
    "Publicidade nativa - Ofereça anúncios que não interrompam a experiência do usuário",
    "Anúncios de vídeo - Crie campanhas visuais que engajam",
    "Meta Business Suite - Gerencie suas campanhas de Meta em um só lugar",
    "Estratégia de conteúdo - Crie conteúdo que atraia e converta",
    "SEO Mobile - Otimize seu site para usuários móveis",
    "Campanhas geolocalizadas - Atraia clientes perto de você",
    "Testes de usabilidade - Melhore a experiência do usuário no seu site",
    "Anúncios personalizados - Alcance o público certo com anúncios altamente segmentados",
    "Social Media Marketing - Expanda sua marca com redes sociais",
    "Campanhas de retargeting - Reengaje visitantes que não converteram",
    "Google Ads Performance Max - Maximize sua performance com anúncios automatizados",
    "Chatbots de vendas - Automatize o processo de vendas com bots",
    "Marketing de Influência - Parcerias para ampliar seu alcance",
    "SEO para vídeos - Otimize seus vídeos para serem encontrados facilmente",
    "Google AdSense - Monetize seu site com anúncios do Google"
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
      <Carousel />
      <MarqueeSection items={momentsItems} />
      <Statistics />
      <MarqueeSection items={momentsItems} />
      <ClientesParceiros />
      <Servicos />
      <ImageCarousel />
      <ChatbotSection />
      <PrintMenagem />
      <CertificationSection />
      <ClientAvaliacao />
      <SeloSection />
      <FaqSection />
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
