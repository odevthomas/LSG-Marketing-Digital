import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Modal from '../../utis/Modal'; // Ajuste o caminho conforme necessário
import Notification from '../../utis/Alerta'; // Importa a notificação

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgvevaab");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true); // Abre o modal quando o envio for bem-sucedido
      document.getElementById("contactForm").reset(); // Limpa o formulário
    }
  }, [state.succeeded]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex overflow-hidden">
      <div className="hidden lg:flex flex-1">
        <img src="/img/hero.jpg" className="w-full h-[172vh] object-cover" alt="Imagem de destaque" />
      </div>
      <div className="flex-1 py-12 lg:flex lg:justify-center lg:h-[172vh] bg-white">
        <div className="max-w-lg mx-auto px-4 text-gray-800">
          <div className="text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Quer saber mais sobre nossos serviços?
            </h3>
            <p className="mt-3 text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato com você!
            </p>
          </div>
          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6 mt-8 lg:pb-12">
            <div>
              <label className="block font-medium text-gray-800 mb-1" htmlFor="name">Seu Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu email"
                required
                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1" htmlFor="contact">Contato</label>
              <input
                id="contact"
                type="tel"
                name="contact"
                placeholder="+55 (11) 9999-9999"
                required
                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-1" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                required
                className="w-full h-32 px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
              <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
            </div>
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full px-4 py-2 text-white font-medium bg-green-500 hover:bg-green-400 active:bg-green-600 rounded-lg transition duration-150 transform hover:scale-105"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onOpenChange={handleCloseModal}
          message="Formulário enviado com sucesso!"
        />
      )}
    </main>
  );
}
