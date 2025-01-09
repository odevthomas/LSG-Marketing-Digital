import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-4">Entre em Contato</h2>
        <p>Você pode entrar em contato pelo WhatsApp:</p>
        <a 
          href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold"
        >
          Clique aqui
        </a>
        <button 
          onClick={onClose}
          className="mt-4 bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;