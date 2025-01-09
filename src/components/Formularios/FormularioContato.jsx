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
    
    try {
      // Enviar os dados para o servidor
      const response = await fetch("https://seu-endpoint-api.com/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar os dados.");

      setSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado

      // Mensagem para WhatsApp
      const whatsappMessage = `Olá ${formData.name}, seu contato foi recebido! Um especialista entrará em contato em breve.`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;

      // Redirecionar para o WhatsApp
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Erro:", error);
      // Aqui você pode adicionar uma mensagem de erro para o usuário
    }
  };

  return (
    <section className="flex min-h-screen bg-black">
      <div className="hidden lg:block lg:w-1/2 h-3/4">
        <img
          src="/digital.png"
          alt="Descrição da imagem"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-black">Formulário de Contato</h1>
          <p className="mt-2 text-gray-600 text-center">Pergunte tudo o que quiser. Adoramos ouvir nossos clientes!</p>

          {submitted ? (
            <div className="text-center mt-6">
              <h2 className="text-lg font-semibold text-black">Obrigado pelo seu contato!</h2>
              <p className="mt-2 text-gray-500">Um especialista entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Nome Completo</label>
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
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Endereço de E-mail</label>
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
                <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">Número de Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(99) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-5 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
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
                  className="block w-full h-32 px-5 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-[#fb1603] focus:ring-[#fb1603]"
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
                <label htmlFor="terms" className="text-sm text-gray-900">
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
      </div>
    </section>
  );
};

export default FormularioDeContato;