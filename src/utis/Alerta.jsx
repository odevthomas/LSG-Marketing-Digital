import React, { useEffect, useState } from 'react';

const Notification = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Função para fechar a notificação
    const handleClose = () => {
        setIsVisible(false);
    };

    // Efeito para fechar automaticamente após 10 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 10000); // 10 segundos

        // Limpeza do temporizador ao desmontar o componente
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null; // Não renderiza se não estiver visível

    return (
        <div className="fixed top-4 right-4 z-50 mt-4 w-80 md:max-w-md mx-auto">
            <div className="rounded-md border-l-4 border-green-500 bg-green-50 shadow-lg">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="self-center ml-3">
                            <span className="text-green-600 font-semibold">
                                Sucesso
                            </span>
                            <p className="text-green-600 mt-1">
                                Formulário enviado com sucesso!
                            </p>
                        </div>
                    </div>
                    <button onClick={handleClose} className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
