import React from "react";

const PrivacyPolicyAndTerms = ({ onClose }) => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Cabeçalho */}
        <header className="bg-gradient-to-r from-black via-gray-900 to-[#f11414] p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            Política de Privacidade e Termos de Uso
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Compromisso com transparência e segurança dos seus dados
          </p>
        </header>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Política de Privacidade */}
          <section>
            <h2 className="text-2xl font-semibold text-[#f11414] mb-4">
              Política de Privacidade
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Valorizamos sua privacidade e protegemos seus dados pessoais com 
                rigorosos padrões de segurança e confidencialidade.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Coleta mínima e essencial de informações</li>
                <li>Dados tratados com total confidencialidade</li>
                <li>Conformidade com legislações de proteção de dados</li>
              </ul>
              <a 
                href="#" 
                className="text-[#f11414] hover:underline font-medium inline-flex items-center"
                aria-label="Política de Privacidade Completa"
              >
                Política Completa
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Termos de Uso */}
          <section>
            <h2 className="text-2xl font-semibold text-[#f11414] mb-4">
              Termos de Uso
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Ao utilizar nossa plataforma, você concorda com nossos termos 
                e compromete-se a respeitar as diretrizes de uso.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Uso ético e responsável</li>
                <li>Proibição de conteúdo ilegal</li>
                <li>Respeito aos direitos autorais</li>
              </ul>
              <a 
                href="#" 
                className="text-[#f11414] hover:underline font-medium inline-flex items-center"
                aria-label="Termos de Uso Completos"
              >
                Termos Completos
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Rodapé de Ações */}
        <footer className="bg-gray-800 p-6 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Última atualização: Junho 2024
          </p>
          <div className="flex space-x-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-6 py-2 border border-gray-700 text-white rounded-lg hover:bg-gray-700 transition"
              aria-label="Cancelar"
            >
              Cancelar
            </button>
            <button 
              type="button" 
              className="px-6 py-2 bg-[#f11414] text-white rounded-lg hover:bg-red-700 transition"
              aria-label="Aceitar Termos"
            >
              Aceitar Termos
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTerms;