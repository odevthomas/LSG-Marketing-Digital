import React from "react";

const FormularioDeContato = () => {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Solução de design definitiva
              </h1>
              <p className="max-w-xl mt-6">
                Oferecemos as melhores soluções para o seu projeto, com designs modernos e eficazes. Entre em contato para mais informações!
              </p>

              <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                Entre em contato
              </button>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                  Formulário de Contato
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Pergunte tudo o que quiser. Adoramos ouvir nossos clientes!
                </p>

                {/* Formulário */}
                <form
                  id="contact-form"
                  action="https://formsubmit.co/comercial@lsgdigital.com.br?redirect=https://seusite.com/pagina-de-confirmacao"
                  method="POST"
                  className="mt-6"
                >
                  {/* Campo Nome Completo */}
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="João da Silva"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required
                    />
                  </div>

                  {/* Campo E-mail */}
                  <div className="flex-1 mt-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Endereço de E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="joaodasilva@exemplo.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required
                    />
                  </div>

                  {/* Campo Telefone */}
                  <div className="flex-1 mt-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Número de Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(99) 99999-9999"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required
                    />
                  </div>

                  {/* Campo Mensagem */}
                  <div className="w-full mt-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem aqui..."
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required
                    />
                  </div>

                  {/* Checkbox de Aceitação de Termos */}
                  <div className="flex items-center space-x-2 mt-6">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="w-5 h-5 text-blue-500"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-500"
                    >
                      Aceito os{" "}
                      <a href="#" className="underline">
                        termos e condições
                      </a>
                      .
                    </label>
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioDeContato;
