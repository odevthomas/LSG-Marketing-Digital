import React from 'react';
import Footer from '../Footer/Footer';
import Form from '../Form';
import Navbar from '../Home/Navbar/Navbar';
import HeroServices from './HeroServices';
import Services from './Services';

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <HeroServices />
      <Services />
      <Form />
      <Footer />
    </>
  );
};

export default ServicePage;
