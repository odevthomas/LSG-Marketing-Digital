import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ícones de "expandir" e "fechar"

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-black py-12 sm:py-16 z-10">
      <div className="container mx-auto px-6 text-white">
        {/* Título da seção */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 tracking-wide">
          Perguntas Frequentes sobre Como Impulsionar Seu Negócio Online
        </h3>

        {/* Container de Grid - 1 ou 2 colunas dependendo da tela */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          {/* Pergunta 1 */}
          <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-800 rounded-lg"
              onClick={() => toggleExpanded(0)}
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-200">
                O que é tráfego pago e como ele pode ajudar meu negócio?
              </h2>
              <span className="text-gray-400 bg-[#000001] rounded-full p-2 transition-colors duration-300 hover:bg-[#000001]">
                {expanded === 0 ? (
                  <Minus className="w-5 h-5 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 0 && (
              <>
                <hr className="border-t-2 border-blue-900" />
                <p className="p-4 sm:p-6 text-base sm:text-lg text-gray-200">
                  O tráfego pago inclui anúncios no Google Ads e Facebook Ads, ajudando a gerar tráfego qualificado e aumentar as conversões. Com campanhas bem segmentadas, sua empresa alcança rapidamente o público certo, aumentando a visibilidade e, o melhor, potencializando suas vendas com resultados mensuráveis.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 2 */}
          <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-800 rounded-lg"
              onClick={() => toggleExpanded(1)}
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-200">
                Como um funil de vendas pode aumentar minhas conversões?
              </h2>
              <span className="text-gray-400 bg-[#000001] rounded-full p-2 transition-colors duration-300 hover:bg-[#000001]">
                {expanded === 1 ? (
                  <Minus className="w-5 h-5 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 1 && (
              <>
                <hr className="border-t-2 border-blue-900" />
                <p className="p-4 sm:p-6 text-base sm:text-lg text-gray-200">
                  Um funil de vendas orienta seus leads do início até a conversão, otimizando cada etapa. Com estratégias comprovadas, engajamos e nutrimos seus clientes potenciais, transformando interesse em vendas. Não se trata apenas de capturar, mas de converter com eficiência.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 3 */}
          <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-800 rounded-lg"
              onClick={() => toggleExpanded(2)}
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-200">
                O que é uma landing page e como ela pode melhorar meu negócio?
              </h2>
              <span className="text-gray-400 bg-[#000001] rounded-full p-2 transition-colors duration-300 hover:bg-[#000001]">
                {expanded === 2 ? (
                  <Minus className="w-5 h-5 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 2 && (
              <>
                <hr className="border-t-2 border-blue-900" />
                <p className="p-4 sm:p-6 text-base sm:text-lg text-gray-200">
                  A landing page é a chave para transformar visitantes em clientes. Criamos páginas otimizadas, com designs irresistíveis e chamadas para ação que capturam a atenção e direcionam os usuários para a conversão imediata. Sua campanha digital precisa disso para ter sucesso!
                </p>
              </>
            )}
          </div>

          {/* Pergunta 4 */}
          <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-800 rounded-lg"
              onClick={() => toggleExpanded(3)}
            >
              <h3 className="font-semibold text-lg sm:text-xl text-gray-200">
                Como a inclusão de chatbot pode beneficiar meu negócio?
              </h3>
              <span className="text-gray-400 bg-[#000001] rounded-full p-2 transition-colors duration-300 hover:bg-[#000001]">
                {expanded === 3 ? (
                  <Minus className="w-5 h-5 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 3 && (
              <>
                <hr className="border-t-2 border-blue-900" />
                <p className="p-4 sm:p-6 text-base sm:text-lg text-gray-200">
                  A implementação de chatbots melhora a comunicação com seus clientes, respondendo rapidamente a dúvidas frequentes e garantindo um atendimento contínuo. Proporcione uma experiência ágil e moderna para seus consumidores, enquanto otimiza seu tempo.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 5 */}
          <div className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-800 rounded-lg"
              onClick={() => toggleExpanded(4)}
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-200">
                O que é CRM e como ele pode otimizar minha gestão de clientes?
              </h2>
              <span className="text-gray-400 bg-[#000001] rounded-full p-2 transition-colors duration-300 hover:bg-[#000001]">
                {expanded === 4 ? (
                  <Minus className="w-5 h-5 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 4 && (
              <>
                <hr className="border-t-2 border-blue-900" />
                <p className="p-4 sm:p-6 text-base sm:text-lg text-gray-200">
                  O CRM organiza e personaliza o relacionamento com seus clientes, tornando cada interação mais eficaz. Ele facilita a automação da comunicação e a análise de dados, aprimorando a fidelização e a satisfação do cliente.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
