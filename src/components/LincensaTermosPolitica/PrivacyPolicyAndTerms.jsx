import React from "react";

const PrivacyPolicyAndTerms = ({ onClose }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Título */}
      <h3 className="text-2xl font-bold text-white mb-4">Política de Privacidade e Termos de Uso</h3>
      
      {/* Política de Privacidade */}
      <section className="mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-2">Política de Privacidade</h4>
        <p className="text-gray-300 text-sm mb-3">
          A sua privacidade é importante para nós. Este site coleta apenas as informações essenciais para oferecer uma experiência personalizada e funcional. Todas as informações são tratadas com confidencialidade e em conformidade com as leis de proteção de dados.
        </p>
        <p className="text-gray-300 text-sm">
          Para mais detalhes sobre como usamos seus dados, acesse nossa <a href="#" className="text-blue-400 hover:underline">Política de Privacidade completa</a>.
        </p>
      </section>

      {/* Termos de Uso */}
      <section>
        <h4 className="text-lg font-semibold text-blue-400 mb-2">Termos de Uso</h4>
        <p className="text-gray-300 text-sm mb-3">
          Ao acessar este site, você concorda em cumprir nossos Termos de Uso. É proibido utilizar qualquer conteúdo deste site sem a devida autorização, bem como realizar práticas que possam comprometer a segurança ou o funcionamento da plataforma.
        </p>
        <p className="text-gray-300 text-sm">
          Recomendamos que leia nossos <a href="#" className="text-blue-400 hover:underline">Termos de Uso completos</a> para entender suas responsabilidades enquanto usuário.
        </p>
      </section>

      {/* Botões de Ação */}
      <div className="mt-6 flex justify-end items-center gap-x-2">
        <button 
          type="button" 
          onClick={onClose} 
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
        <a 
          href="#" 
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Aceitar Termos
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTerms;