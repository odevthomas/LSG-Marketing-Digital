import React from 'react';
import Slider from 'react-slick'; // Carrossel interativo
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Ícones do Lucide

// Testemunhos dos clientes
const testimonials = [
  {
    clientName: 'Floya',
    role: 'DESIGNER',
    testimonial: 'Excelente trabalho! A equipe da LSG sempre entrega o que promete e com qualidade.',
    avatar: 'ImgInstagram/Floya.jpg',
    rating: 5, // Número de estrelas
  },
  {
    clientName: 'Tom Minnicelli',
    role: 'CLIENTE',
    testimonial: 'A LSG Digital nos ajudou a aumentar nosso alcance em menos de 6 meses. Trabalho incrível!',
    avatar: 'ImgInstagram/tominnicelli.jpg',
    rating: 5,
  },
  {
    clientName: 'Jéssica Rocha',
    role: 'CLIENTE',
    testimonial: 'Trabalhar com a LSG foi um divisor de águas para o meu negócio. Profissionais excepcionais!',
    avatar: 'ImgInstagram/cliente2.jpeg',
    rating: 4,
  },
  {
    clientName: 'André Martins',
    role: 'CLIENTE',
    testimonial: 'O time da LSG é altamente competente e atencioso. Sempre entregam soluções eficazes para nossos problemas.',
    avatar: 'ImgInstagram/cliente1.jpeg',
    rating: 4,
  },
  {
    clientName: 'Carlos Oliveira',
    role: 'CLIENTE',
    testimonial: 'Ótimo atendimento! A LSG tem um time de profissionais dedicados e super capacitados.',
    avatar: 'ImgInstagram/carlos.jpg',
    rating: 5,
  },
];

const ClientTestimonial = ({ clientName, role, testimonial, avatar, rating }) => {
  // Função para renderizar as estrelas
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#fb1603]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="keen-slider__slide p-4 z-10">
      <blockquote className="flex flex-col justify-between bg-[#ffffff] p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="text-center">
          <div className="flex justify-center gap-0.5 text-yellow-400 mb-4">{renderStars(rating)}</div>
          <div>
            <p className="text-lg sm:text-xl font-medium text-gray-900">{testimonial}</p>
          </div>
        </div>

        <footer className="mt-6 text-center text-sm font-semibold text-gray-900 sm:mt-8">
          &mdash; {clientName} ({role})
        </footer>
      </blockquote>
    </div>
  );
};

const ClientAvaliacao = () => {
  const settings = {
    infinite: true,
    speed: 800, // Aumentando a velocidade da transição
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true, // Habilitando autoplay
    autoplaySpeed: 5000, // Atraso entre as transições
    prevArrow: (
      <button
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-3 text-rose-600 shadow-md hover:bg-rose-600 hover:text-black transition duration-300"
      >
        <ChevronLeft />
      </button>
    ),
    nextArrow: (
      <button
        aria-label="Next slide"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-3 text-rose-600 shadow-md hover:bg-rose-600 hover:text-black transition duration-300"
      >
        <ChevronRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative py-20 w-full min-h-screen  bg-white  bg-cover bg-center bg-fixed flex items-center"
      aria-label="Chamada para agendamento e informações sobre nossos serviços de beleza e estética"
    >
      {/* Camada para escurecer a imagem */}
      <div className="absolute inset-0 bg-white opacity-10"></div>

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 relative">
        <h2 className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center">
          Avaliações de{" "}
          <span className="text-[#0f0f0f]">Sucesso</span>
        </h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-900 text-center">
          Não acreditamos apenas em números, mas em histórias reais de empresas que transformaram suas operações e alcançaram resultados extraordinários.
        </p>
        <div className="relative mb-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <ClientTestimonial key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientAvaliacao;
