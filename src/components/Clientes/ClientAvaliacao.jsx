import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';  // Remova a importação de 'KeenSliderInstance'
import 'keen-slider/keen-slider.min.css';

const ClientSlide = ({ imgSrc, clientName, username, testimonial }) => (
  <div className="keen-slider__slide">
    <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={imgSrc}
          alt={clientName}
        />
        <div className="text-sm">
          <p className="font-bold text-black">{clientName}</p>
          <p className="text-black">@{username}</p>
        </div>
      </div>
      <p className="mt-4 text-black">{testimonial}</p>
    </div>
  </div>
);

const ClientAvaliacao = () => {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);  // Remova a referência para 'KeenSliderInstance'

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
      });
    }

    return () => {
      sliderInstance.current?.destroy();
    };
  }, []);

  const handlePrevSlide = () => sliderInstance.current?.prev();
  const handleNextSlide = () => sliderInstance.current?.next();

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1740px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#81ff94] sm:text-4xl">
              Nossos Clientes!
            </h2>
            <p className="mt-4 text-white">
              Conheça nossos maiores clientes! Veja como eles têm aproveitado nossos serviços.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                className="rounded-full p-3 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m14 16-4-4 4-4" />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNextSlide}
                className="rounded-full p-3 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              <ClientSlide
                imgSrc="/ImgInstagram/amovacinasoficial.jpg"
                clientName="Amo Vacinas"
                username="amovacinasoficial"
                testimonial="A experiência foi excelente, nossa empresa cresceu muito desde que começamos a trabalhar com eles!"
              />
              <ClientSlide
                imgSrc="/ImgInstagram/tominnicelli.jpg"
                clientName="Tom Minnicelli"
                username="tominnicelli"
                testimonial="Simplesmente incrível! Nos ajudaram a aumentar nosso alcance digital em menos de 6 meses."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAvaliacao;
