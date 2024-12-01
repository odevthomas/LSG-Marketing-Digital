import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Exibe o modal após 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Por favor, preencha todos os campos para continuar.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulando o envio para uma API (substitua com a sua API real)
    try {
      setTimeout(() => {
        setLoading(false);
        setIsConfirmed(true); // Mostra a mensagem de confirmação
        console.log('Dados enviados com sucesso:', { name, email, phone });
      }, 2000); // Simula o tempo de envio
    } catch (err) {
      setLoading(false);
      setError('Ocorreu um erro ao enviar seus dados. Tente novamente.');
    }
  };

  return (
    <>
      {isOpen && !isConfirmed && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && handleClose()} // Fechar ao clicar fora
        >
          <div className="relative bg-white rounded-lg shadow-xl sm:w-[400px] w-full p-4 mx-4">
            <div>
              <img
                className="object-cover w-full h-32 rounded-md"
                src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Diagnostic image"
              />
              <div className="mt-2 text-center">
                <h3
                  className="font-medium leading-5 text-gray-800 capitalize dark:text-black"
                  id="modal-title"
                >
                  Oferta de Diagnóstico Gratuito!
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Aproveite esta oportunidade exclusiva! Diagnóstico completo de saúde no valor de R$ 399, totalmente grátis.
                </p>

                <p className="mt-2 text-lg font-semibold text-blue-600">
                  Oferta exclusiva: R$ 399 grátis!
                </p>
              </div>
            </div>

            {/* Formulário com Nome, E-mail e Telefone */}
            <div className="mt-3 text-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Digite seu telefone"
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
              <button
                onClick={handleClose}
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Fechar
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${
                  loading ? 'bg-gray-400' : 'bg-blue-600'
                } rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                      ></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  'Aproveitar Agora'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem de confirmação após o clique */}
      {isConfirmed && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-white">
              Diagnóstico Agendado
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Parabéns, {name}! Seu diagnóstico gratuito foi agendado com sucesso. Um e-mail de confirmação foi enviado para {email}.
            </p>
            <button
              onClick={handleClose}
              className="mt-3 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Exibir erro, caso exista */}
      {error && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-white">
              Erro
            </h3>
            <p className="mt-2 text-sm text-gray-900 dark:text-gray-900">{error}</p>
            <button
              onClick={handleClose}
              className="mt-3 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
