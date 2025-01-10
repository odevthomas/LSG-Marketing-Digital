import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

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
    setError(null); // Limpa erros ao fechar
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Por favor, preencha todos os campos para continuar.');
      return;
    }

    // Enviar dados para o Google Analytics
    window.gtag('event', 'form_submission', {
      event_category: 'Formulário',
      event_label: 'Dados do Usuário',
      value: name,
    });

    // Enviar e-mail com os dados do formulário
    const templateParams = {
      from_name: name,
      to_name: 'Equipe LSG Digital',
      message: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`,
      reply_to: email,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        
        // Cria a mensagem de confirmação para o WhatsApp
        const mensagemWhatsApp = `Olá! Meu nome é ${name}, meu e-mail é ${email} e meu telefone é ${phone}. Gostaria de confirmar minha solicitação!`;

        // Redireciona para o WhatsApp
        window.open(`https://wa.me/551999042072?text=${encodeURIComponent(mensagemWhatsApp)}`, '_blank');

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPhone('');
        setIsConfirmed(true);
      }, (err) => {
        console.error('Falha ao enviar e-mail:', err);
        setError('Falha ao enviar e-mail. Tente novamente mais tarde.');
      });
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

      {isConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0b0b0b] p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-green-600 capitalize">Confirmação</h3>
            <p className="mt-2 text-sm text-white">Obrigado! Sua solicitação foi enviada com sucesso.</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none transition-colors"
            >
              Fechar
            </button>
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