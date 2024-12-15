import React from "react";

const TermsOfUse = ({ onClose }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Título */}
      <h3 className="text-2xl font-bold text-white mb-4">Termos de Uso</h3>

      {/* Conteúdo dos Termos de Uso */}
      <section>
        <p className="text-gray-300 text-sm mb-3">
          Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Caso não concorde com algum dos termos, pedimos que não utilize nossos serviços.
        </p>
        <p className="text-gray-300 text-sm mb-3">
          É proibido:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Utilizar o conteúdo do site sem autorização prévia.</li>
            <li>Realizar práticas que comprometam a segurança ou funcionalidade da plataforma.</li>
            <li>Compartilhar informações falsas ou ofensivas.</li>
          </ul>
        </p>
        <p className="text-gray-300 text-sm mb-3">
          O site se reserva o direito de modificar estes termos a qualquer momento. É responsabilidade do usuário revisar regularmente os Termos de Uso para estar ciente de alterações.
        </p>
        <p className="text-gray-300 text-sm">
          Para mais detalhes, acesse a página completa dos <a href="#" className="text-blue-400 hover:underline">Termos de Uso</a>.
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

export default TermsOfUse;