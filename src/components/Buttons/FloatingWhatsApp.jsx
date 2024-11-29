import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  // Função de callback para quando a caixa de bate-papo for fechada
  const handleClose = () => {
    alert("A caixa de bate-papo foi fechada!");
  };

  // Função de callback para quando a notificação for clicada
  const handleNotification = () => {
    console.log("Notificação clicada!");
  };

  return (
     <FloatingWhatsApp
      phoneNumber="5519981331191" // Número do WhatsApp no formato internacional
      accountName="LSG Digital" // Nome da conta do WhatsApp
      chatMessage="Olá, como podemos ajudar?" // Mensagem inicial
      chatboxHeight={400} // Aumentando a altura do chatbox para mais espaço
      notification={true} // Notificações ativadas
      notificationDelay={60} // Atraso de notificações em segundos
      notificationSound={true} // Som de notificação ativado
      notificationSoundSrc="/path/to/sound.mp3" // Caminho para o som da notificação
      placeholder="Escreva sua mensagem..." // Texto do campo de entrada
      allowClickAway={false} // Impede o fechamento ao clicar fora do chatbox
      allowEsc={false} // Impede o fechamento com a tecla Escape
      darkMode={true} // Ativando o modo escuro para um visual moderno
      buttonStyle={{
        background: "linear-gradient(45deg, #25D366, #25D366)", // Gradiente de cor para o botão
        borderRadius: "50%", // Tornando o botão redondo
        padding: "10px", // Aumentando o tamanho do botão
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Sombras para o botão
      
      }}
      buttonClassName="whatsapp-float-btn" // Classe personalizada para o botão
      chatboxStyle={{
        borderRadius: "16px", // Bordas arredondadas para o chatbox
        padding: "15px", // Padding maior para dar mais conforto
        fontSize: "16px", // Ajuste no tamanho da fonte para legibilidade
        backgroundColor: "#1c1c1c", // Cor de fundo mais escura no chatbox
        color: "#fff", // Texto branco no chatbox
      }}
      notificationStyle={{
        backgroundColor: "#25D366", // Cor de fundo verde para a notificação
        borderRadius: "8px", // Bordas arredondadas para a notificação
        padding: "10px", // Aumentando o padding da notificação
        color: "#fff", // Texto da notificação em branco
        fontSize: "14px", // Tamanho de fonte ajustado
      }}
      notificationClassName="custom-notification" // Classe personalizada para a notificação
      messageDelay={3} // Reduzindo o delay da mensagem inicial para 3 segundos
    />

  );
};

export default WhatsAppButton;
