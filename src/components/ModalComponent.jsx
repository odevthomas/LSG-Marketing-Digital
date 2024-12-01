import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState(null);

  // Exibe o modal após 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 9000);

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Por favor, preencha todos os campos para continuar.');
      return;
    }

    // Cria um formulário HTML para enviar os dados
    const form = document.createElement('form');
    form.method = 'POST';
    form.action =
      'https://formsubmit.co/comercial@lsgdigital.com.br?redirect=https://seusite.com/pagina-de-confirmacao';

    // Adiciona os campos ao formulário
    const fields = [
      { name: 'name', value: name },
      { name: 'email', value: email },
      { name: 'phone', value: phone },
    ];

    fields.forEach(({ name, value }) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    // Adiciona o formulário ao DOM e o envia
    document.body.appendChild(form);
    form.submit();

    // Limpa o formulário após o envio
    document.body.removeChild(form);
  };

  return (
    <>
      {isOpen && !isConfirmed && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-gray-800 bg-opacity-50"
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
                  className="font-medium leading-5 text-black capitalize dark:text-black"
                  id="modal-title"
                >
                  Oferta de Diagnóstico Gratuito!
                </h3>

                <p className="mt-1 text-sm text-black dark:text-gray-400">
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
                className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              >
                Aproveitar Agora
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
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