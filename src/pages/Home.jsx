import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      setIsModalOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black overflow-hidden"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <HeroSection />
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Statistics />
      </motion.div>

      {/* MarqueeSections com efeito de hover */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        transition={{ type: "tween" }}
      >
        <MarqueeSection items={momentsItems1} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel />
        <ClientesParceiros />
        <ChatbotSection />
        <Servicos />
      </motion.div>

      <MarqueeSection items={momentsItems2} />

      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ImageCarousel />
      </motion.div>

      <MarqueeSection items={momentsItems3} />

      <motion.div 
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <ServicePlans />
      </motion.div>

      <CertificationSection />
      <ClientAvaliacao />
      
      <MarqueeSection items={momentsItems4} />

      <PrintMenagem />
      <FaqSection />
      <SeloSection />
      <FormularioContato />
      <Footer />

      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <CookieConsent />
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-5 right-5 z-40"
      >
        <WhatsAppButton />
      </motion.div>
    </motion.div>
  );
};

export default Home;
