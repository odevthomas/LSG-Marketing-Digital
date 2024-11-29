"use client";

import React, { useEffect, useState } from "react";
import Carousel from "../components/Clientes/Carousel";
import ClientAvaliacao from "../components/Clientes/ClientAvaliacao";
import Avaliacao from "../components/Clientes/ClientSection";
import CouponModal from "../components/ModalComponent"; // Ajuste o caminho conforme necessário
import Footer from "../components/Footer";
import ImageCarousel from "../components/Clientes/ImageCarousel";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre o modal de cupom após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <section>
        <Carousel />
      </section>

      {/* Avaliação */}
      <section>
        <Avaliacao />
      </section>

      {/* Avaliação de Clientes */}
      <section>
        <ClientAvaliacao />
      </section>
      
      {/* Carrossel de Imagens (Clientes) */}
      <section>
        <ImageCarousel />
      </section>

    

      {/* Footer */}
      <section>
        <Footer />
      </section>

      {/* Modal de Cupom */}
      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Home;
