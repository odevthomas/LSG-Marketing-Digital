import React, { useState } from 'react';

const BrindeForm = () => {
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && contato) {
      // Cria uma mensagem formatada para o WhatsApp
      const whatsappMessage = `Olá, eu gostaria de garantir meu brinde! \n\nEmail: ${email} \nContato: ${contato}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5519981331191&text=${encodedMessage}`;

      // Redireciona o usuário para o WhatsApp
      window.open(whatsappUrl, "_blank");

      setIsSubmitted(true); // Indica que o formulário foi enviado
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#000' }}>
      <h2>Parabéns! Você ganhou um diagnóstico gratuito no valor de <span style={{ color: '#f6472c' }}>R$ 399,90</span>!</h2>
      <p>Preencha o formulário abaixo para garantir sua oferta e aproveitar o brinde exclusivo!</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} id="contact-form">
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '10px',
                width: '250px',
                borderRadius: '5px',
                marginRight: '10px',
                borderColor: '#000',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Seu contato (telefone)"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              required
              style={{
                padding: '10px',
                width: '250px',
                borderRadius: '5px',
                marginRight: '10px',
                borderColor: '#000',
                fontSize: '16px',
                backgroundColor: '#fff',
                color: '#000',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#f6472c',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Garantir meu brinde
          </button>
        </form>
      ) : (
        <p>Obrigado! Você será redirecionado em breve...</p>
      )}
    </div>
  );
};

export default BrindeForm;
