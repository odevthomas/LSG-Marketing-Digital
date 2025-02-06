import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Função para verificar se o cookie foi aceito
  useEffect(() => {
    const cookieConsent = document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
    if (cookieConsent) {
      setIsAccepted(true); // Se o cookie existir, já foi aceito
    }
  }, []);

  // Função para definir o cookie de consentimento
  const handleAccept = () => {
    document.cookie = 'cookieConsent=true; max-age=31536000; path=/'; // Expira em 1 ano
    setIsAccepted(true);
  };

  // Função para rejeitar cookies não essenciais
  const handleReject = () => {
    document.cookie = 'cookieConsent=false; max-age=31536000; path=/';
    setIsAccepted(true);
  };

  // Função para alternar detalhes dos cookies
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    !isAccepted && (
      <div 
        className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-6 z-50 shadow-2xl"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
      >
        <div className="max-w-6xl mx-auto flex flex-col space-y-4">
          <div className="flex-grow text-center md:text-left">
            <h2 
              id="cookie-consent-title" 
              className="text-xl font-satoshi font-bold mb-3 text-white"
            >
              Privacidade e Cookies
            </h2>
            <p className="text-sm font-satoshi text-gray-300 mb-4">
              Utilizamos cookies para melhorar sua experiência e análise de dados. 
              Ao continuar navegando, você concorda com nossa 
              <a 
                href="/politica-de-privacidade" 
                className="text-[#f11414] hover:underline mx-1 font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Política de Privacidade em nova aba"
              >
                Política de Privacidade
              </a>
            </p>

            {showDetails && (
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-bold mb-2">Tipos de Cookies que utilizamos:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Cookies Essenciais - Necessários para o funcionamento do site</li>
                  <li>Cookies Analíticos - Nos ajudam a melhorar o site</li>
                  <li>Cookies de Marketing - Permitem ofertas personalizadas</li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-4">
            <button
              onClick={toggleDetails}
              className="text-gray-300 underline text-sm hover:text-white transition-colors duration-300"
              aria-expanded={showDetails}
            >
              {showDetails ? 'Ocultar Detalhes' : 'Ver Detalhes dos Cookies'}
            </button>
            
            <button
              onClick={handleReject}
              className="bg-gray-600 text-white font-satoshi font-bold px-6 py-3 rounded-full 
                       hover:bg-gray-700 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              aria-label="Rejeitar cookies não essenciais"
            >
              Rejeitar
            </button>

            <button
              onClick={handleAccept}
              className="bg-[#f11414] text-white font-satoshi font-bold px-6 py-3 rounded-full 
                       hover:bg-[#d30f0f] transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-opacity-50"
              aria-label="Aceitar todos os cookies"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
