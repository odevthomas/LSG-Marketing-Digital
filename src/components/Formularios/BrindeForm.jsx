import React, { useState } from 'react';

const BrindeForm = () => {
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && contato) {
      // Lógica para redirecionamento após o envio do formulário
      setIsSubmitted(true);

      // Redireciona para a página de pedido ou agradecimento
      window.location.href = '/pagina-de-pedido'; // Substitua pelo link de destino
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Parabéns! Você ganhou um diagnóstico gratuito no valor de R$ 399,90!</h2>
      <p>Preencha o formulário abaixo para garantir sua oferta e aproveitar o brinde exclusivo!</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '10px', width: '250px', borderRadius: '5px', marginRight: '10px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Seu contato (telefone)"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              required
              style={{ padding: '10px', width: '250px', borderRadius: '5px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
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
