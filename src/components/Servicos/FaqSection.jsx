import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ícones de "expandir" e "fechar"

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-[#000] dark:bg-gray-400 py-16 z-10">
      <div className="container mx-auto px-6 z-10">
        {/* Título da seção */}
        <h3 className="text-4xl font-extrabold text-center text-gray-300 lg:text-5xl dark:text-gray-400 mb-12">
          Perguntas Frequentes sobre nossos serviços
        </h3>

        {/* Container de Grid - 2 colunas em telas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Pergunta 1 */}
          <div
            key={0}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(0)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é tráfego pago e como ele pode ajudar meu negócio?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 0 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 0 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  O tráfego pago inclui anúncios no Google Ads e Facebook Ads, que ajudam a gerar tráfego qualificado e aumentar as conversões. Com campanhas bem segmentadas, você pode alcançar o público certo, aumentar a visibilidade e impulsionar suas vendas rapidamente. Utilizamos estratégias de anúncios pagos que maximizam o ROI e garantem resultados mensuráveis.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 2 */}
          <div
            key={1}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(1)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como um funil de vendas pode aumentar minhas conversões?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 1 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 1 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  Um funil de vendas é uma estratégia que guia seus leads do estágio inicial até a conversão. Criamos funis otimizados para aumentar suas taxas de conversão, utilizando métodos comprovados para nutrir e engajar clientes em potencial, com táticas de remarketing e automação de e-mail.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 3 */}
          <div
            key={2}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(2)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é uma landing page e como ela pode melhorar meu negócio?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 2 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 2 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  A landing page é uma página de captura projetada para converter visitantes em leads ou clientes. Criamos landing pages otimizadas com designs atraentes e chamadas para ação claras, garantindo que sua campanha de marketing seja mais eficaz e aumente a conversão.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 4 */}
          <div
            key={3}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(3)}
            >
              <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como a inclusão de chatbot pode beneficiar meu negócio?
              </h3>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 3 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 3 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  A implementação de chatbots automatiza o atendimento, oferecendo respostas rápidas a perguntas frequentes. Isso garante um atendimento contínuo, aumentando a satisfação do cliente e proporcionando um suporte eficiente, sem sobrecarregar sua equipe.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 5 */}
          <div
            key={4}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(4)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é CRM e como ele pode otimizar minha gestão de clientes?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 4 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 4 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  CRM (Customer Relationship Management) é um sistema que organiza o relacionamento com seus clientes, automatiza a comunicação e aumenta a fidelização. Integramos soluções CRM com chatbots para um atendimento mais eficiente.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 6 */}
          <div
            key={5}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(5)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como as campanhas de tráfego pago no Google Ads e Facebook Ads funcionam?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 5 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 5 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  As campanhas de Google Ads e Facebook Ads permitem alcançar o público ideal. Utilizamos estratégias de segmentação avançada para gerar tráfego qualificado e aumentar as vendas, otimizando continuamente a performance das campanhas.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 7 */}
          <div
            key={6}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(6)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Quais métricas e relatórios são utilizados para medir o sucesso da minha estratégia?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 6 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 6 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  Acompanhamos métricas cruciais como CTR (taxa de cliques), taxa de conversão, CAC (custo de aquisição de cliente) e ROI (retorno sobre o investimento) para garantir o sucesso de suas campanhas e otimizar continuamente os resultados.
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
