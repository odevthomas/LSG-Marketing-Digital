import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

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
    <div>
      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsApp
        phoneNumber={whatsappInfo.phoneNumber}
        accountName={whatsappInfo.accountName}
        chatMessage={whatsappInfo.chatMessage}
        chatboxHeight={400}
        notification={true}
        notificationDelay={60}
        notificationSound={true}
        notificationSoundSrc="/sound/whatsapp-notification.mp3"
        placeholder={whatsappInfo.placeholder}
        allowClickAway={false}
        allowEsc={true}
        darkMode={true}
        avatar="/avatar.png"  // Caminho do avatar personalizado
        buttonStyle={{
          background: whatsappInfo.buttonColor,
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 99999,
        }}
        chatboxStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "5% 5% 0 0",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          position: "fixed",
          bottom: "6rem",
          right: "1rem",
          width: "386px",
          opacity: 1,
        
          zIndex: 99998,
        }}
        status={whatsappInfo.status}
        statusMessage={whatsappInfo.statusMessage}
        position={whatsappInfo.position}
      />
    </div>
  );
};

export default WhatsAppButton;
