import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

// Informações do WhatsApp podem ser passadas como props ou definidas como valores padrão
const FloatingWhatsAppComponent = ({ buttonImage = "/avatarwpp.jpeg" }) => {
  const whatsappInfo = {
    phoneNumber: "5519981331191",
    accountName: "LSG Digital",
    chatMessage: "Olá, como podemos ajudar?",
    placeholder: "Escreva sua mensagem...",
    buttonImage, // Usando a imagem passada como prop
    buttonColor: "linear-gradient(45deg, #25D366, #25D366)",
    position: "right",
    status: "online",
    statusMessage: "Estamos online, pode chamar!",
  };

  // Estilos do botão WhatsApp
  const buttonStyle = {
    background: whatsappInfo.buttonColor,
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "60px", // Tamanho do botão
    height: "60px", // Tamanho do botão
  };

  // Estilos do chatbox do WhatsApp
const chatboxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "5%",
  overflow: "hidden",
  backgroundColor: "#000000FF",
  position: "fixed",
  bottom: "6rem",
  right: "1rem",
  width: "386px", // O chatbox terá esta largura
  opacity: 1, // Aumentar a opacidade para tornar visível
  transition: "height 0.2s ease-out",
  boxShadow: "0 3px 10px 0 rgb(0 0 0 / 20%)",
  zIndex: 9999,
  backgroundImage: "url('img/logo-2.png')",  // Caminho da imagem de fundo
  backgroundSize: "cover",  // A imagem vai cobrir toda a área do chatbox
  backgroundPosition: "center", // Alinha a imagem no centro
};
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333",  // Cor de fundo escura
  padding: "20px 40px",  // Espaçamento interno
  position: "fixed",
  top: 0,  // Fixando no topo da página
  left: 0,  // Na esquerda
  right: 0,  // Na direita
  zIndex: 10000,  // Garante que o header fique sempre acima dos outros elementos
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  // Sombra suave
};

const logoStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",  // Cor do texto do logo
  textDecoration: "none",  // Remover sublinhado dos links
  textTransform: "uppercase",  // Colocar texto em maiúsculas
};

const navStyle = {
  display: "flex",
  gap: "20px",  // Espaçamento entre os itens de navegação
};

const navLinkStyle = {
  fontSize: "16px",
  color: "#fff",  // Cor do texto dos links
  textDecoration: "none",  // Remover sublinhado
  transition: "color 0.3s ease",
};

const navLinkHoverStyle = {
  color: "#25D366",  // Cor do link ao passar o mouse
};


  return (
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
      darkMode={true}
      buttonImage={whatsappInfo.buttonImage}
      buttonStyle={buttonStyle} // Estilos inline para o botão
      chatboxStyle={chatboxStyle} // Estilos inline para o chatbox
      status={whatsappInfo.status}
      statusMessage={whatsappInfo.statusMessage}
      position={whatsappInfo.position}
    />
  );
};

export default FloatingWhatsAppComponent;
