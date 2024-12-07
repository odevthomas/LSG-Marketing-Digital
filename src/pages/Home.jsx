import React, { useEffect, useState } from "react";
import Carousel from "../components/Clientes/Carousel";
import ClientAvaliacao from "../components/Clientes/ClientAvaliacao";
import Avaliacao from "../components/Clientes/ClientSection";
import CouponModal from "../components/ModalComponent";
import Footer from "../components/Footer";
import ImageCarousel from "../components/Clientes/ImageCarousel";
import Navbar from "../components/Navbar";
import CookieConsent from '../components/CookieConsent'; // Caminho do arquivo
import FloatingWhatsAppComponent from '../components/Buttons/FloatingWhatsApp'; // Caminho do componente



const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Abre o modal após 3 segundos
    }, 8000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <>
      <Navbar />

        <Carousel />

        <Avaliacao />

        <ClientAvaliacao />

        <ImageCarousel />

      <Footer />

      {/* Modal de Cupom */}
      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <CookieConsent />
     <div className="fixed bottom-5 right-5 z-40">
        <FloatingWhatsAppComponent />
      </div>

    </>
  );
};

export default Home;
