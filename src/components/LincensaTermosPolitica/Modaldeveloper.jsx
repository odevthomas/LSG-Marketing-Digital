import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  // Fechar o modal quando a tecla ESC for pressionada
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out"
        style={{ 
          animation: 'fadeInUp 0.5s ease-out',
          fontFamily: 'Satoshi, sans-serif'
        }}
      >
        <div className="p-8 text-center">
          <h2 
            id="modal-title" 
            className="text-3xl font-bold mb-6 text-black"
          >
            Vamos Conversar?
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4 text-lg">
              Entre em contato direto pelo WhatsApp e acelere seu projeto
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-4 bg-[#f11414] text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors duration-300 ease-in-out"
              aria-label="Iniciar conversa no WhatsApp"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Iniciar Conversa Agora
            </a>
          </div>

          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-black underline transition-colors"
            aria-label="Fechar modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
