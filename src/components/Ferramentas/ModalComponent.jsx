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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Enviar dados para o Google Analytics
    window.gtag('event', 'lead_generation', {
      event_category: 'Formulário de Diagnóstico',
      event_label: 'Solicitação de Diagnóstico Gratuito',
      value: 1
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
        const mensagemWhatsApp = `Olá! Meu nome é ${name}, meu e-mail é ${email} e meu telefone é ${phone}. Gostaria de mais informações sobre o diagnóstico gratuito!`;

        // Redireciona para o WhatsApp
        window.open(`https://wa.me/551999042072?text=${encodeURIComponent(mensagemWhatsApp)}`, '_blank');

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPhone('');
        setIsConfirmed(true);
      }, (err) => {
        console.error('Falha ao enviar e-mail:', err);
        setError('Erro ao enviar solicitação. Tente novamente.');
      });
  };

  return (
    <>
      {isOpen && !isConfirmed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          role="dialog" 
          aria-labelledby="modal-title"
        >
          <div className="relative bg-[#0b0b0b] rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all hover:scale-105">
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Diagnóstico Estratégico Gratuito"
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h2 
                id="modal-title" 
                className="text-3xl font-bold text-white mb-4 tracking-tight"
              >
                Diagnóstico Estratégico
              </h2>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Descubra oportunidades únicas para sua empresa com nossa análise especializada. 
                Transforme desafios em estratégias de sucesso!
              </p>

              <div className="text-2xl font-bold text-[#f11414] mb-6">
                Valor: R$ 399 - <span className="text-green-500">GRÁTIS</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu Nome Completo"
                  aria-label="Nome"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#333] focus:border-[#f11414] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu Melhor E-mail"
                  aria-label="E-mail"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#333] focus:border-[#f11414] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Seu Telefone"
                  aria-label="Telefone"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#333] focus:border-[#f11414] focus:outline-none transition-colors"
                />

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-1/2 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-3 bg-[#f11414] text-white rounded-lg hover:bg-[#ff2424] transition-colors"
                  >
                    Solicitar Diagnóstico
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-4 text-red-500 text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#0b0b0b] p-8 rounded-2xl text-center max-w-md">
            <div className="text-6xl mb-4 text-green-500">✓</div>
            <h3 className="text-2xl font-bold text-white mb-4">Solicitação Confirmada!</h3>
            <p className="text-gray-300 mb-6">
              Entraremos em contato em breve para agendar seu diagnóstico estratégico.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-[#f11414] text-white rounded-lg hover:bg-[#ff2424] transition-colors"
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