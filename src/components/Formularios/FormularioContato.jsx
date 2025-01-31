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

    if (!formData.name || !formData.phone || !formData.message || !formData.terms) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const whatsappMessage = `Olá, meu nome é ${formData.name}. Meu telefone é ${formData.phone}. Mensagem: ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
      setSubmitted(true);
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-black py-16 px-4 font-satoshi"
      aria-labelledby="contact-section-title"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto com Animação */}
        <motion.div 
          className="text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            id="contact-section-title" 
            className="text-5xl font-bold text-white leading-tight"
          >
            Transforme Sua Visão em Estratégia Digital
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Conecte-se conosco e descubra soluções inovadoras que impulsionam seu negócio para o futuro.
          </p>
          <div className="space-y-4 mt-8">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Consultoria Estratégica" },
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Soluções Personalizadas" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-[#f11414] transition-transform group-hover:scale-110" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-lg text-gray-200 group-hover:text-[#f11414] transition-colors">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulário com Efeito de Elevação */}
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:scale-105"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {submitted ? (
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-black">Mensagem Recebida!</h3>
              <p className="text-xl text-gray-700">
                Nossa equipe entrará em contato em breve.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-auto px-8 py-3 bg-[#f11414] text-white rounded-lg font-bold"
              >
                Enviar Outra Mensagem
              </motion.button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-bold text-black text-center mb-6">
                Acelere Seu Projeto
              </h3>
              
              {[
                { 
                  label: "Nome Completo", 
                  type: "text", 
                  name: "name", 
                  placeholder: "Seu nome completo" 
                },
                { 
                  label: "Telefone", 
                  type: "tel", 
                  name: "phone", 
                  placeholder: "(99) 99999-9999" 
                }
              ].map((field, index) => (
                <div key={index}>
                  <label 
                    htmlFor={field.name} 
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f11414] transition duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Detalhes do Projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg h-32 focus:outline-none focus:border-[#f11414] transition duration-300"
                  placeholder="Compartilhe os detalhes do seu projeto..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mr-3 text-[#f11414] focus:ring-[#f11414]"
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-gray-700"
                >
                  Aceito os{" "}
                  <a 
                    href="/termos" 
                    className="text-[#f11414] underline hover:text-opacity-80"
                    aria-label="Termos e Condições"
                  >
                    termos e condições
                  </a>
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#f11414] text-white py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300 uppercase tracking-wider"
              >
                Iniciar Projeto
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioDeContato;
