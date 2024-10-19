"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Avaliacao from '../Clientes/Avaliacao';
import Carousel from '../Clientes/Carousel';
import Client from '../Clientes/Client';
import Testimonial from '../Clientes/Testimonial';
import HeroResult from '../Result/Result';
import Footer from '../Footer/Footer';
import Navbar from './Navbar/Navbar';
import CouponModal from '../../utis/Cupom'; // Ajuste o caminho conforme necessário
import './Page.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000); // 60000 milissegundos = 1 minuto

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    console.log("Contato clicado!");
  };

  return (
    <>
      <Navbar className="margin-top" />
      <div className="margin-top"><Carousel /></div>
      <div className="margin-top"><Client /></div>
      <div className="margin-top"><Avaliacao /></div>
      <div className="margin-top"><Footer /></div>

      {/* Adicione o CouponModal aqui */}
      <CouponModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Home;
