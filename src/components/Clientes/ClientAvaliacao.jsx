import React, { useEffect, useRef } from "react";
import Avatar from "boring-avatars";
import KeenSlider from "keen-slider"; // Importando KeenSlider
import "keen-slider/keen-slider.min.css"; // Estilo do KeenSlider

const ClientSlide = ({ clientName, username, testimonial }) => {
  return (
    <div className="keen-slider__slide">
      <div className="bg-white p-6 shadow-sm sm:p-8 lg:p-12 w-full">
        <div className="flex items-center space-x-4">
          <Avatar name={clientName} size={88} variant="marble" />
          <div className="text-sm">
            <p className="font-bold text-black">{clientName}</p>
            <p className="text-black">@{username}</p>
          </div>
        </div>
        <p className="mt-4 text-black">{testimonial}</p>
      </div>
    </div>
  );
};

const ClientAvaliacao = () => {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  const testimonials = [
    {
      clientName: "Amo Vacinas",
      username: "amovacinasoficial",
      testimonial:
        "A experiência foi excelente, nossa empresa cresceu muito desde que começamos a trabalhar com eles!",
    },
    {
      clientName: "Tom Minnicelli",
      username: "tominnicelli",
      testimonial:
        "Simplesmente incrível! Nos ajudaram a aumentar nosso alcance digital em menos de 6 meses.",
    },
    {
      clientName: "Novo Cliente",
      username: "novocliente",
      testimonial:
        "Os resultados foram além das nossas expectativas, nossa visibilidade online nunca esteve melhor!",
    },
    {
      clientName: "Jéssica Rocha",
      username: "jessicarocha",
      testimonial:
        "Trabalhar com a equipe da LSG Digital foi um divisor de águas para o meu negócio!",
    },
    {
      clientName: "André Martins",
      username: "andremartins",
      testimonial:
        "Excelente! O time é super profissional e atencioso. Só tenho a agradecer!",
    },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slidesPerView: 2, // Mostrar 2 slides de cada vez em telas grandes
        spacing: 20, // Espaço entre os slides
        breakpoints: {
          640: {
            slidesPerView: 1, // Mostrar 1 slide por vez em telas pequenas
          },
          1024: {
            slidesPerView: 2, // Mostrar 2 slides por vez em telas médias/grandes
          },
        },
      });
    }

    return () => {
      sliderInstance.current?.destroy();
    };
  }, []);

  const handlePrevSlide = () => sliderInstance.current?.prev();
  const handleNextSlide = () => sliderInstance.current?.next();

  return (
    <section className="bg-[#1f1f1f] py-12 lg:py-16 xl:py-24 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#81ff94] sm:text-4xl">
              Nossos Clientes!
            </h2>
            <p className="mt-4 text-white">
              Conheça nossos maiores clientes! Veja como eles têm aproveitado
              nossos serviços.
            </p>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0 w-full">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <ClientSlide
                  key={index}
                  clientName={testimonial.clientName}
                  username={testimonial.username}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePrevSlide}
                className="p-3 rounded-full bg-[#25D366] text-white transition hover:bg-[#128C7E]"
              >
                Anterior
              </button>
              <button
                onClick={handleNextSlide}
                className="p-3 rounded-full bg-[#25D366] text-white transition hover:bg-[#128C7E]"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAvaliacao;
