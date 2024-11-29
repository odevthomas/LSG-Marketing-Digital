import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Exibe o modal após 20 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // 20000 milissegundos = 20 segundos

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (name.trim() && email.trim() && phone.trim()) {
      setIsConfirmed(true);
    } else {
      alert('Por favor, preencha todos os campos para continuar.');
    }
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
      // Aqui você pode fazer a requisição para sua API, por exemplo:
      // const response = await fetch('SUA_API_URL', {
      //   method: 'POST',
      //   body: JSON.stringify({ name, email, phone }),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Simulando uma resposta de sucesso:
      setTimeout(() => {
        setLoading(false);
        setIsConfirmed(true); // Mostra a mensagem de confirmação
        console.log('Dados enviados com sucesso:', { name, email, phone }); // Substitua com a resposta da sua API
      }, 2000); // Simula o tempo de envio
    } catch (err) {
      setLoading(false);
      setError('Ocorreu um erro ao enviar seus dados. Tente novamente.');
    }
  };

  return (
    <>
      {isOpen && !isConfirmed && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#000;</span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
              <div>
                <img className="object-cover w-full h-48 rounded-md" src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Diagnostic image" />

                <div className="mt-4 text-center">
                  <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-black" id="modal-title">
                    Oferta de Diagnóstico Gratuito!
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Aproveite esta oportunidade exclusiva! Obtenha um diagnóstico completo de saúde no valor de R$ 399, totalmente grátis, por tempo limitado.
                  </p>

                  <p className="mt-4 text-lg font-semibold text-blue-600">
                    Oferta exclusiva: R$ 399 grátis!
                  </p>
                </div>
              </div>

              {/* Formulário com Nome, E-mail e Telefone */}
              <div className="mt-4 text-center">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Digite seu telefone"
                  className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
                <button onClick={handleClose} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                  Fechar
                </button>

                <button 
                  onClick={handleSubmit} 
                  disabled={loading}
                  className={`w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${loading ? 'bg-gray-400' : 'bg-blue-600'} rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}>
                  {loading ? 'Enviando...' : 'Aproveitar Agora'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem de confirmação após o clique */}
      {isConfirmed && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-white">
              Diagnóstico Agendado
            </h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Parabéns, {name}! Seu diagnóstico gratuito no valor de R$ 399 foi agendado com sucesso. Um e-mail de confirmação foi enviado para {email}.
            </p>
            <button onClick={handleClose} className="mt-4 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Exibir erro, caso exista */}
      {error && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
            <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-white">
              Erro
            </h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {error}
            </p>
            <button onClick={handleClose} className="mt-4 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
