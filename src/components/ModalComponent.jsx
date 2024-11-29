import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o modal
  const closeModal = () => setIsOpen(false);

  // Função para abrir o modal
  const openModal = () => setIsOpen(true);

  return (
    <div className="relative flex justify-center">
      {/* Botão flutuante com a caixa de presente */}
      <div 
        onClick={openModal} 
        className="floating-btn fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        🎁
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={closeModal} // Fecha o modal ao clicar fora
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div
              className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl sm:my-8 sm:w-full sm:p-6"
              onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no modal
            >
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-800" id="modal-title">
                  Parabéns!
                </h3>

                <p className="mt-2 text-gray-500">
                  Você ganhou um <span className="font-bold text-blue-600">diagnóstico gratuito</span> no valor de <span className="font-bold">R$ 399,90</span>!
                </p>
                <p className="mt-4 text-gray-500">
                  Preencha o formulário para garantir sua oferta e aproveite o brinde exclusivo!
                </p>
              </div>

              <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                {/* Botões do modal */}
                <button 
                  onClick={closeModal} 
                  className="w-full py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                >
                  Fechar
                </button>
                <Link
                  to="/formularios/BrindeForm"
                  className="w-full py-2 mt-3 sm:mt-0 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none"
                >
                  Brinde
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
