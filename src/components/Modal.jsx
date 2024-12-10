import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-50 z-50" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4 z-60">
          <div className="bg-[#0b0b0b] rounded-md shadow-lg px-6 py-8">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[#f6472c] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
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

            <Dialog.Title className="text-lg font-semibold text-white text-center mt-4">
              Formulário Enviado com Sucesso!
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-relaxed text-center text-white">
              🎉 Obrigado por entrar em contato! Nossa equipe já recebeu sua
              mensagem e responderá em breve. Estamos animados para ajudar você!
            </Dialog.Description>

            <div className="mt-6 flex justify-center">
              <Dialog.Close asChild>
                <button className="px-4 py-2 bg-[#f6472c] text-white rounded-lg hover:bg-[#f46d40] transition duration-300">
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

const FormComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Preencha todos os campos.");
      return;
    }

    // Simula o envio do formulário usando formsubmit.co
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://formsubmit.co/comercial@lsgdigital.com.br?redirect=https://seusite.com/pagina-de-confirmacao";

    Object.keys(formData).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = formData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    setIsOpen(true);
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6472c]"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6472c]"
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6472c]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#f6472c] text-white rounded-lg hover:bg-[#f46d40] transition duration-300"
        >
          Enviar
        </button>
      </form>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default FormComponent;