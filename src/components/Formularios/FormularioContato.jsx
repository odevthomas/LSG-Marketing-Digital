import React, { useState } from "react";
import { motion } from "framer-motion";

const FormularioDeContato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    if (!formData.name || !formData.phone || !formData.email || !formData.message || !formData.terms) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Cria uma mensagem para o WhatsApp com os dados preenchidos
      const whatsappMessage = `Olá, meu nome é ${formData.name}. Meu telefone é ${formData.phone}. Meu email é ${formData.email}. Mensagem: ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;

      // Redireciona para o WhatsApp
      window.open(whatsappUrl, "_blank");

      setSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado
    } catch (error) {
      console.error("Erro:", error);
      // Aqui você pode adicionar uma mensagem de erro para o usuário
    }
  };

  return (
    <section className="flex min-h-screen bg-white justify-center items-center">
      {/* Formulário centralizado e utilizando toda a largura disponível */}
      <div className="w-full max-w-4xl p-8 bg-black rounded-xl shadow-lg">
        <h4 className="text-2xl font-semibold text-center text-[#f11414]">Formulário de Contato</h4>
        <p className="mt-2 text-white text-center">Pergunte tudo o que quiser. Adoramos ouvir nossos clientes!</p>

        {submitted ? (
          <div className="text-center mt-6">
            <h2 className="text-lg font-semibold text-[#fff]">Obrigado pelo seu contato!</h2>
            <p className="mt-2 text-gray-800">Um especialista entrará em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm text-gray-300">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="João da Silva"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-5 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-gray-300">Endereço de E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="joaodasilva@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-5 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm text-gray-300">Número de Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-5 py-3 text-gray-200 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-gray-100">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
                className="block w-full h-32 px-5 py-3 text-gray-200 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-5 h-5 text-[#fb1603]"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-100">
                Aceito os{" "}
                <a href="#" className="underline text-[#fb1603]">termos e condições</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb1603] rounded-md hover:bg-[#fb1603] focus:outline-none focus:ring focus:ring-[#fb1603] focus:ring-opacity-50"
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
