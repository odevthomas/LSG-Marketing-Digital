import React, { useState, useEffect } from 'react';
import './WhatsAppButton.css'; // Importando o arquivo de estilos

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappInfo = {
    phoneNumber: "5519981331191",
    chatMessage: "Olá, quero falar com especialista!",
    buttonColor: "#208537", // Cor do botão
  };

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar tooltip após 4 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(whatsappInfo.chatMessage);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappInfo.phoneNumber}&text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <div className="tooltip-content">
            <span className="tooltip-text">Fale com um especialista</span>
            <span className="online-indicator"></span>
            <button 
              className="close-tooltip"
              onClick={() => setShowTooltip(false)}
            >
              ×
            </button>
          </div>
          <div className="tooltip-arrow"></div>
        </div>
      )}

      <button
        onClick={handleClick}
        className="whatsapp-button"
        aria-label="Iniciar conversa no WhatsApp"
        onMouseEnter={() => !showTooltip && setShowTooltip(true)}
      >
        <div className="button-content">
          <img
            src="/icons/wpp-icon.svg"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          <div className="ripple-effect"></div>
        </div>
      </button>
    </>
  );
};

export default WhatsAppButton;