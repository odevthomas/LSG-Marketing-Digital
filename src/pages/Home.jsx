import React, { useEffect, useState } from "react";
import Carousel from "../components/Clientes/Carousel";
import ClientAvaliacao from "../components/Clientes/ClientAvaliacao";
import Avaliacao from "../components/Clientes/ClientSection";
import CouponModal from "../components/ModalComponent";
import Footer from "../components/Footer";
import ImageCarousel from "../components/Clientes/ImageCarousel";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Abre o modal após 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <section>
        <Carousel />
      </section>

      {/* Avaliação */}
      <section style={{ margin: "20px 0" }}>
        <Avaliacao />
      </section>

      {/* Avaliação de Clientes */}
      <section style={{ margin: "20px 0" }}>
        <ClientAvaliacao />
      </section>

      {/* Carrossel de Imagens (Clientes) */}
      <section style={{ margin: "20px 0" }}>
        <ImageCarousel />
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal de Cupom */}
      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Home;
