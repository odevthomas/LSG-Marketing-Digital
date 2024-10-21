import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from 'react';

const CouponModal = ({ isOpen, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mgvevaab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error in form submission');
      }

      setSubmitted(true);
      setError(null);
      
      // Optionally, you can wait a moment before closing
      setTimeout(() => {
        onOpenChange(false);
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-60" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
            <Dialog.Title className="text-2xl font-bold text-center text-[#43a047] mb-2">
              🎉 Você ganhou um diagnóstico gratuito!
            </Dialog.Title>
            <Dialog.Description className="text-md text-gray-600 text-center mb-4">
              No valor de <span className="highlighted-value">R$ 399,90!</span> Preencha o formulário para garantir sua oferta.
            </Dialog.Description>

            {submitted ? (
              <div className="text-center">
                <p className="text-[#43a047] font-semibold">
                  Formulário enviado com sucesso! 
                </p>
                <p className="mt-2 text-black">Aguarde a confirmação em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43a047] transition duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43a047] transition duration-200"
                  required
                />
                <div className="mt-4 flex justify-center space-x-4">
                  <button 
                    type="submit" 
                    className="w-1/2 py-3 bg-[#43a047] text-white font-semibold rounded-lg hover:bg-[#369e3e] transition duration-200">
                    Aproveitar
                  </button>
                  <Dialog.Close asChild>
                    <button className="w-1/2 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-200">
                      Fechar
                    </button>
                  </Dialog.Close>
                </div>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CouponModal;
