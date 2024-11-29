"use client";

import React, { useEffect, useState } from 'react';

// Componente Notification
const Notification = ({ message, type = 'success', duration = 10000 }) => {
    const [isVisible, setIsVisible] = useState(true);

    // Função para fechar a notificação
    const handleClose = () => {
        setIsVisible(false);
    };

    // Efeito para fechar automaticamente após a duração especificada
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        // Limpeza do temporizador ao desmontar o componente
        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null; // Não renderiza se não estiver visível

    return (
        <div className="notification-container">
            <div className={`notification ${type === 'success' ? 'notification-success' : 'notification-error'}`}>
                <div className="notification-content">
                    <div className="notification-icon">
                        {type === 'success' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 112 0v2a1 1 0 11-2 0v-2zm0-3a1 1 0 112 0v1a1 1 0 11-2 0V6z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <div className="notification-text">
                        <span className={`notification-title ${type === 'success' ? 'text-green' : 'text-red'}`}>
                            {type === 'success' ? 'Sucesso' : 'Erro'}
                        </span>
                        <p className={`notification-message ${type === 'success' ? 'text-green' : 'text-red'}`}>
                            {message}
                        </p>
                    </div>
                    <button onClick={handleClose} className="notification-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-close" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
