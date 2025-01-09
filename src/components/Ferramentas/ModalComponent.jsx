import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState(null);

  // Exibe o modal após 9 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 9000);

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

    // Envia o formulário
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <>
      {isOpen && !isConfirmed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && handleClose()} // Fechar ao clicar fora
        >
          <div className="relative bg-[#0b0b0b] rounded-lg shadow-2xl sm:w-[400px] w-full p-6 mx-4 transition-transform transform hover:scale-105">
            <div>
              <img
                className="object-cover w-full h-32 rounded-md"
                src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Imagem de Diagnóstico"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-white capitalize" id="modal-title">
                  Oferta de Diagnóstico Gratuito!
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Aproveite esta oportunidade exclusiva! Diagnóstico completo de saúde no valor de R$ 399, totalmente grátis.
                </p>

                <p className="mt-2 text-lg font-semibold text-[#f6472c]">
                  Oferta exclusiva: R$ 399 grátis!
                </p>
              </div>
            </div>

            {/* Formulário com Nome, E-mail e Telefone */}
            <div className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6472c] transition-colors"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6472c] transition-colors"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Digite seu telefone"
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f6472c] transition-colors"
                required
              />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4">
              <button
                onClick={handleClose}
                className="w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors sm:w-1/2"
              >
                Fechar
              </button>

              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-[#f6472c] rounded-md hover:bg-[#fb1603] focus:outline-none transition-colors sm:mt-0 sm:w-1/2"
              >
                Aproveitar Agora
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0b0b0b] p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-red-600 capitalize">Erro</h3>
            <p className="mt-2 text-sm text-white">{error}</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none transition-colors"
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