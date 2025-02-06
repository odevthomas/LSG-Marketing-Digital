import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Testemunhos dos clientes
const testimonials = [
  {
    clientName: 'Floya',
    role: 'Empreendedora',
    testimonial: 'Excelente trabalho! A equipe da LSG sempre entrega o que promete e com qualidade.',
    rating: 5,
  },
  {
    clientName: 'Tom Minnicelli',
    role: 'CEO',
    testimonial: 'A LSG Digital nos ajudou a aumentar nosso alcance em menos de 6 meses. Trabalho incrível!',
    rating: 5,
  },
  {
    clientName: 'Jéssica Rocha',
    role: 'Gestora de Negócios',
    testimonial: 'Trabalhar com a LSG foi um divisor de águas para o meu negócio. Profissionais excepcionais!',
    rating: 4,
  },
  {
    clientName: 'André Martins',
    role: 'Diretor',
    testimonial: 'O time da LSG é altamente competente e atencioso. Sempre entregam soluções eficazes para nossos problemas.',
    rating: 4,
  },
  {
    clientName: 'Carlos Oliveira',
    role: 'Empresário',
    testimonial: 'Ótimo atendimento! A LSG tem um time de profissionais dedicados e super capacitados.',
    rating: 5,
  },
];

const ClientTestimonial = ({ clientName, role, testimonial, rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#fb1603]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="keen-slider__slide p-4 z-10">
      <blockquote 
        className="flex flex-col justify-between bg-black text-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
        aria-label={`Depoimento de ${clientName}`}
      >
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-4" role="img" aria-label="Avaliação em estrelas">
            {renderStars(rating)}
          </div>
          <p className="text-lg font-medium italic mb-4">"{testimonial}"</p>
        </div>

        <footer className="mt-4 text-center text-sm font-semibold">
          <span className="block text-white">{clientName}</span>
          <span className="text-gray-400">{role}</span>
        </footer>
      </blockquote>
    </div>
  );
};

const ClientAvaliacao = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: (
      <button
        aria-label="Slide anterior"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200 transition duration-300 z-20"
      >
        <ChevronLeft />
      </button>
    ),
    nextArrow: (
      <button
        aria-label="Próximo slide"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200 transition duration-300 z-20"
      >
        <ChevronRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { 
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false
        }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false
        }
      }
    ]
  };

  return (
    <section 
      className="relative py-16 bg-white" 
      aria-labelledby="chatbot-title"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="chatbot-title"
          className="text-5xl md:text-6xl font-black text-black mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Potencialize seus 
          <br />
          <span className="text-[#f11414]">Resultados Digitais</span>
          <motion.p
            className="text-2xl md:text-3xl mt-6 font-medium text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Marketing Digital que gera resultados reais
          </motion.p>
        </motion.h2>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <ClientTestimonial 
                key={index} 
                {...testimonial} 
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientAvaliacao;
