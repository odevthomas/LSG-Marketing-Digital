import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  const whatsappInfo = {
    phoneNumber: "5519981331191",
    accountName: "LSG Digital",
    chatMessage: "Olá, como podemos ajudar?",
    placeholder: "Escreva sua mensagem...",
    buttonImage: "/img/logo.png",
    buttonColor: "linear-gradient(45deg, #25D366, #25D366)",
    position: "right",
    status: "online",
    statusMessage: "Estamos online, pode chamar!",
  };

  const buttonStyle = {
    background: whatsappInfo.buttonColor,
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    zIndex: 9999,
  };

  const chatboxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5% 5% 0 0",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    position: "fixed",
    bottom: "6rem",
    right: "1rem",
    width: "386px",
    opacity: 1,
    boxShadow: "0 3px 10px 0 rgb(0 0 0 / 20%)",
    zIndex: 9998,
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#25D366",
    padding: "10px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  const statusStyle = {
    color: "#ffffff",
    fontSize: "14px",
  };

  return (
    <div>
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
        allowEsc={false}
        darkMode={false}
        buttonImage={whatsappInfo.buttonImage}
        buttonStyle={buttonStyle}
        chatboxStyle={chatboxStyle}
        status={whatsappInfo.status}
        statusMessage={whatsappInfo.statusMessage}
        position={whatsappInfo.position}
      />
    </div>
  );
};

export default WhatsAppButton;
