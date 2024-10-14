import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Stats from '../Result/Stats';
import Features from './Features';
import Garantia from './Garantia';
import HeroResult from './HeroResult';

const Result = () => {
  return (
    <>
      <Navbar />
      <Features />
      <Stats className="mt-6" /> 
      <HeroResult className="mt-6" />
      <Garantia className="mt-6" />
      <Footer className="mt-6" />
    </>
  );
};

export default Result;
