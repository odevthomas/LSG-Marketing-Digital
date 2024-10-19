import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Stats from '../Result/Stats';
import Mensagens from './Mensagens'; // Corrigido de 'Mensagenses' para 'Mensagens'
import Garantia from './Garantia';
import HeroResult from '../Result/HeroResult';

const Result = () => {
  return (
    <>
      <Navbar />
      <Mensagens />
      <Stats className="mt-6" /> 
      <Garantia className="mt-6" />
      <HeroResult className="mt-6" /> 
      <Footer className="mt-6" />
    </>
  );
};

export default Result;
