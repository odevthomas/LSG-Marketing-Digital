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
      <div className="fixed bottom-5 right-5 z-50 bg-[#0b0b0b] text-gray-100 p-6 rounded-lg border-2 border-black w-full max-w-sm animate__animated animate__fadeIn animate__delay-1s">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-sm sm:text-base">
              Este site usa cookies para melhorar a sua experiência. Ao continuar a navegar, você concorda com o uso de cookies. 
              <a href="/política-de-privacidade" className="text-[#81ff94] hover:underline ml-1">
                Saiba mais
              </a>
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-between space-x-4">
          <button
            onClick={handleAccept}
            className="bg-[#81ff94] text-black text-sm px-4 py-2 rounded-md hover:bg-[#81ff94] focus:outline-none transition duration-300"
          >
            Aceitar
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
