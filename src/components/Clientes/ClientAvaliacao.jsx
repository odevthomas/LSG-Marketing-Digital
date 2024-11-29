import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const ClientAvaliacao = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
    });

    return () => {
      slider.destroy(); // Limpa o slider quando o componente for desmontado
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1740px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#81ff94] sm:text-4xl">
              Nossos Clientes!
            </h2>
            <p className="mt-4 text-black">
              Conheça nossos maiores clientes! Veja como eles têm aproveitado nossos serviços.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              {/* Botões de navegação */}
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full p-3 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-chevron-left"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m14 16-4-4 4-4" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
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
                  className="lucide lucide-circle-chevron-right"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {/* Slide 1 */}
              <div className="keen-slider__slide">
                <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src="/ImgInstagram/amovacinasoficial.jpg"
                      alt="Client 1"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-black">Amo Vacinas</p>
                      <p className="text-black">@amovacinasoficial</p>
                    </div>
                  </div>
                  <p className="mt-4 text-black">
                    "A experiência foi excelente, nossa empresa cresceu muito desde que começamos a trabalhar com eles!"
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="keen-slider__slide">
                <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src="/ImgInstagram/tominnicelli.jpg"
                      alt="Client 2"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-black">Tom Minnicelli</p>
                      <p className="text-black">@tominnicelli</p>
                    </div>
                  </div>
                  <p className="mt-4 text-black">
                    "Simplesmente incrível! Nos ajudaram a aumentar nosso alcance digital em menos de 6 meses."
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="keen-slider__slide">
                <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src="/ImgInstagram/novo_olhar_revelesuabeleza.jpg"
                      alt="Client 3"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-black">Kely Santana</p>
                      <p className="text-black">@novo_olhar_revelesuabeleza</p>
                    </div>
                  </div>
                  <p className="mt-4 text-black">
                    "Altamente recomendados! A equipe é muito dedicada e nossos resultados falam por si mesmos."
                  </p>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="keen-slider__slide">
                <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src="/ImgInstagram/casavrsalao.jpg"
                      alt="Client 4"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-black">CASA VR</p>
                      <p className="text-black">@casavrsalao</p>
                    </div>
                  </div>
                  <p className="mt-4 text-black">
                    "Altamente recomendados! A equipe é muito dedicada e nossos resultados falam por si mesmos."
                  </p>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="keen-slider__slide">
                <div className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src="/ImgInstagram/novo_olhar_revelesuabeleza.jpg"
                      alt="Client 5"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-black">Kely Santana</p>
                      <p className="text-black">@novo_olhar_revelesuabeleza</p>
                    </div>
                  </div>
                  <p className="mt-4 text-black">
                    "Altamente recomendados! A equipe é muito dedicada e nossos resultados falam por si mesmos."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-1 flex justify-center gap-4">
              {/* Botões de navegação no mobile */}
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-mobile"
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
                  className="lucide lucide-circle-chevron-left"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m14 16-4-4 4-4" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-mobile"
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
                  className="lucide lucide-circle-chevron-right"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAvaliacao;
