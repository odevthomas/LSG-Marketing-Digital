import React, { useState } from "react";
import { motion } from "framer-motion";

const FormularioDeContato = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
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

    if (!formData.name || !formData.phone || !formData.message) {
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
      className="relative min-h-screen flex items-center justify-center bg-white from-white to-gray-50 py-24 px-4 font-satoshi overflow-hidden"
      aria-labelledby="contact-section-title"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg[#f11414] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Coluna de Texto com Animação */}
        <motion.div 
          className="text-black space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            id="contact-section-title" 
            className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vamos <span className="text-[#f11414]">Revolucionar</span> Seu Negócio Digital
            <span className="block text-2xl md:text-3xl font-normal mt-4 text-gray-600">
              Transforme ideias em resultados extraordinários
            </span>
          </motion.h2>

          <div className="space-y-6 mt-12">
            {[
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                text: "Estratégias Inovadoras",
                desc: "Soluções sob medida para seu crescimento"
              },
              { 
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                text: "Resultados Garantidos",
                desc: "Performance e segurança para seu projeto"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 text-[#f11414]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f11414] transition-colors">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulário com Design Moderno */}
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-12 transform transition-all duration-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {submitted ? (
            <motion.div 
              className="text-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Ótimo! Mensagem Enviada</h3>
              <p className="text-xl text-gray-600">
                Entraremos em contato em breve para iniciar sua jornada de sucesso.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-auto px-8 py-3 bg-[#f11414] text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar Nova Mensagem
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  Comece Agora
                </h3>
                <p className="text-gray-600">Transforme seu projeto em realidade</p>
              </div>

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
