import React, { useState } from "react";
import { motion } from "framer-motion";

const FormularioDeContato = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se os dados obrigatórios foram preenchidos
    if (!formData.name || !formData.phone || !formData.message || !formData.terms) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Cria uma mensagem para o WhatsApp com os dados preenchidos
      const whatsappMessage = `Olá, meu nome é ${formData.name}. Meu telefone é ${formData.phone}. Mensagem: ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;

      // Redireciona para o WhatsApp
      window.open(whatsappUrl, "_blank");

      setSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <section className="flex min-h-screen bg-black justify-center items-center py-12 px-4 sm:px-8">
      <div className="w-full max-w-2xl p-12 bg-black rounded-xl shadow-xl">
        <h4 className="text-3xl font-semibold text-center text-[#f11414]">Entre em Contato Conosco</h4>

        <p className="mt-4 text-xl text-white text-center">Nos avise o que podemos fazer por você!</p>

        {submitted ? (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-[#fff]">Obrigado pelo seu contato!</h2>
            <p className="mt-4 text-gray-800">Em breve um de nossos especialistas responderá via WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block mb-3 text-lg text-gray-300">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-6 py-4 text-lg text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-3 text-lg text-gray-300">Número de Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-6 py-4 text-lg text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 text-lg text-gray-100">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
                className="block w-full h-40 px-6 py-4 text-lg text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-6 h-6 text-[#fb1603]"
                required
              />
              <label htmlFor="terms" className="text-lg text-gray-100">
                Aceito os{" "}
                <a href="#" className="underline text-[#fb1603]">termos e condições</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb1603] rounded-md hover:bg-[#fb1603] focus:outline-none focus:ring focus:ring-[#fb1603] focus:ring-opacity-50"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormularioDeContato;
