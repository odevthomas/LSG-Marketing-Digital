import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

const Modal = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-6 py-8">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Dialog.Title
              className="text-lg font-semibold text-black text-center mt-4"
              id="modal-title"
            >
              Formulário Enviado com Sucesso!
            </Dialog.Title>
            <Dialog.Description
              className="mt-2 text-sm leading-relaxed text-center text-black"
              id="modal-description"
            >
              🎉 Obrigado por entrar em contato! Nossa equipe já recebeu sua
              mensagem e responderá em breve. Estamos animados para ajudar você!
            </Dialog.Description>
            <div className="mt-6 flex justify-center">
              <Dialog.Close asChild>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400">
                  Fechar
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;