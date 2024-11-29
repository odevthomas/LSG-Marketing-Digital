import React, { useState } from 'react';

const BrindeForm = () => {
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && contato) {
      // Definindo que o formulário foi enviado
      setIsSubmitted(true);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#000' }}> {/* Texto preto */}
      <h2>Parabéns! Você ganhou um diagnóstico gratuito no valor de <span style={{ color: '#28a745' }}>R$ 399,90</span>!</h2> {/* Valor em verde */}
      <p>Preencha o formulário abaixo para garantir sua oferta e aproveitar o brinde exclusivo!</p>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          action="https://formsubmit.co/comercial@lsgdigital.com.br?redirect=https://seusite.com/pagina-de-confirmacao"
          method="POST"
        >
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
                borderColor: '#000', // Cor do borda preta
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
                backgroundColor: '#000000FF', // Cor de fundo verde
                padding: '10px',
                width: '250px',
                borderRadius: '5px',
                borderColor: '#000', // Cor do borda preta
                color: '#ff', // Cor da fonte do botão branca

              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745', // Cor de fundo verde
              color: '#000', // Cor da fonte do botão branca
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
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
