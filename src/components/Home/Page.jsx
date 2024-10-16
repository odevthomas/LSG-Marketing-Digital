import React from 'react';
import { motion } from 'framer-motion';
import Avaliacao from '../Clientes/Avaliacao';
import Carousel from '../Clientes/Carrossel/Carousel';
import Client from '../Clientes/Client';
import Testimonial from '../Clientes/Testimonial';
import HeroResult from '../Result/Result';
import Footer from '../Footer/Footer';
import Navbar from './Navbar/Navbar';
import './Page.css';

const Home = () => {
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
    </>
  );
};

export default Home;
