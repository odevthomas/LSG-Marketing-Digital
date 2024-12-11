"use client";
import { motion } from "framer-motion";
import React from "react";

const SeloSection = () => {
  const image = "/garantia.png"; 

  return (
    <section className="from-black via-[#333] to-[#2121] z-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-6 py-12">
        <div className="text-center sm:text-left space-y-6">
          <motion.h3
className="text-4xl font-semibold text-[#fb1603] hover:text-[#f6472c] transition duration-300 ease-in-out shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Garantia de Satisfação
          </motion.h3>

          <motion.p
            className="text-lg text-[#f5f5f5]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Confiança total na qualidade. Garantimos sua satisfação ou ajustamos o que for necessário.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h5 className="text-lg font-semibold text-gray-100">O que inclui?</h5>
            <p className="text-sm text-gray-400 mt-2">
              Caso não esteja satisfeito com o serviço, oferecemos ajustes ou sessões adicionais para garantir o seu completo contentamento.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center sm:justify-start mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Ola quero saber como funciona"
              className="inline-flex items-center py-3 px-6 bg-[#fb1603] text-white hover:bg-[#f6472c] rounded-lg shadow-md transition-all duration-300"
              aria-label="Descubra mais sobre a Garantia"
            >
              DESCUBRA MAIS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <motion.img
            src={image}
            alt="Garantia de Satisfação"
            className="w-40 sm:w-48 md:w-64 lg:w-72 h-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>
      </div>

      <div className="mt-12 bg-[#000] py-12 px-6 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-semibold text-gray-200 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Como Funciona a Garantia?
          </motion.h3>

          <div className="space-y-4">
            <details className="group rounded-lg border-2 border-[#333] p-4 text-[#fff]">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200">
                <h3 className="font-semibold text-[#fb1603] text-xl hover:text-[#f6472c] transition duration-300 ease-in-out">O que está incluído na garantia?</h3>
                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-200">
                A garantia cobre ajustes ou sessões adicionais caso você não esteja satisfeito com os resultados. Estamos comprometidos com a sua satisfação total.
              </p>
            </details>

            <details className="group rounded-lg border-2 border-[#333] p-4 text-[#fff]">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200">
                <h3 className="font-semibold text-[#fb1603] text-xl hover:text-[#f6472c] transition duration-300 ease-in-out">Como posso solicitar um ajuste?</h3>
                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-200">
                Para solicitar um ajuste, entre em contato conosco diretamente através do WhatsApp ou por e-mail.
              </p>
            </details>

            <details className="group rounded-lg border-2 border-[#333] p-4 text-[#fff]">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200">
                <h3 className="font-semibold text-[#fb1603] text-xl hover:text-[#f6472c] transition duration-300 ease-in-out">E se eu não estiver satisfeito com o ajuste?</h3>
                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-200">
                Se mesmo após o ajuste você não estiver satisfeito, oferecemos uma política de reembolso ou outra alternativa para garantir sua satisfação total.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeloSection;
