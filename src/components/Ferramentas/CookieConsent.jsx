import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useState(false);

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

  return (
    !isAccepted && (
      <div 
        className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-6 z-50 shadow-2xl"
        role="alert"
        aria-describedby="cookie-consent-message"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-grow text-center md:text-left">
            <h2 
              id="cookie-consent-message" 
              className="text-lg font-satoshi font-bold mb-2 text-white"
            >
              Privacidade e Cookies
            </h2>
            <p className="text-sm font-satoshi text-gray-300">
              Utilizamos cookies para melhorar sua experiência e análise de dados. 
              Ao continuar navegando, você concorda com nossa 
              <a 
                href="/politica-de-privacidade" 
                className="text-[#f11414] hover:underline ml-1 font-bold"
                aria-label="Política de Privacidade"
              >
                Política de Privacidade
              </a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleAccept}
              className="bg-[#f11414] text-white font-satoshi font-bold px-6 py-3 rounded-full 
                         hover:bg-[#d30f0f] transition-colors duration-300 
                         focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-opacity-50"
              aria-label="Aceitar cookies"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
