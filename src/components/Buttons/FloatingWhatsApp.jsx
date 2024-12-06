import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './WhatsAppButton.css'; // Importando o CSS externo

const WhatsAppButton = () => {
  const whatsappInfo = {
    phoneNumber: "5519981331191",
    accountName: "LSG Digital",
    chatMessage: "Olá, como podemos ajudar?",
    placeholder: "Escreva sua mensagem...",
    buttonColor: "linear-gradient(45deg, #25D366, #25D366)", // Cor do botão
    position: "right",
    status: "online",
    statusMessage: "Estamos online, pode chamar!",
  };

  return (
    <div className="whatsapp-button-container">
      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsApp
        phoneNumber={whatsappInfo.phoneNumber}
        accountName={whatsappInfo.accountName}
        chatMessage={whatsappInfo.chatMessage}
        notification={true}
        notificationDelay={60}
        notificationSound={true}
        notificationSoundSrc="/sound/whatsapp-notification.mp3"
        placeholder={whatsappInfo.placeholder}
        allowClickAway={false}
        avatar="/avatar.png"  // Caminho do avatar personalizado
        buttonStyle={{
          background: whatsappInfo.buttonColor,
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Sombra mais forte
          cursor: "pointer",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 9999999, // Garante que o botão sempre fique acima de outros elementos
        }}
        chatboxStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px", // Bordas mais arredondadas
          overflow: "hidden",
          backgroundColor: "#ffffff",
          position: "fixed",
          bottom: "6rem",
          right: "1rem",
          width: "400px", // Largura do chatbox
          opacity: 1,
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Sombra mais forte
          zIndex: 9999998, // Garante que o chatbox também esteja acima, mas abaixo do botão
          padding: "15px", // Espaçamento interno
        }}
        status={whatsappInfo.status}
        statusMessage={whatsappInfo.statusMessage}
        position={whatsappInfo.position}
      />
    </div>
  );
};

export default WhatsAppButton;