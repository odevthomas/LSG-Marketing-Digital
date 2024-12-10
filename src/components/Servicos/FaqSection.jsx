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
          {/* Pergunta 1 - Atendimento com Chatbots Inteligentes */}
          <div
            key={0}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(0)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é um Atendimento com Chatbots Inteligentes?
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
                  Integrar um chatbot inteligente ao seu sistema permite automatizar o suporte ao cliente, aumentando a eficiência da sua equipe. Isso permite que os colaboradores se concentrem em tarefas mais estratégicas e complexas.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 2 - Demonstração Grátis */}
          <div
            key={1}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(1)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como funciona a Demonstração Grátis?
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
                  A demonstração grátis permite testar nossas soluções e ver como elas podem otimizar seus processos antes de qualquer compromisso. Aproveite para explorar os recursos e funcionalidades.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 3 - Gestão de CRM */}
          <div
            key={2}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(2)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é um sistema de Gestão de CRM?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 2 ? (
                  <Minus className="w-6 h-6 text-[#f46d40]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 2 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  O CRM ajuda a organizar seus contatos e automatizar o acompanhamento de leads, transformando-os em clientes fiéis. Com ele, você pode melhorar a comunicação e otimizar os processos de vendas.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 4 - Implementação de Chatbots */}
          <div
            key={3}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(3)}
            >
              <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como a Implementação de Chatbots pode ajudar meu negócio?
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
                  A implementação de chatbots humanizados oferece uma resposta rápida e eficiente para perguntas frequentes, proporcionando um atendimento ao cliente mais ágil, enquanto automatiza processos repetitivos.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 5 - Criação de Funil de Vendas */}
          <div
            key={4}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(4)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que é um Funil de Vendas e como ele pode ajudar?
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
                  Criar funis de vendas inteligentes permite direcionar seus leads de forma estratégica, ajudando-os a avançar nas etapas do processo até a conversão, aumentando a eficiência da equipe de vendas.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 6 - Campanhas Personalizadas */}
          <div
            key={5}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(5)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                O que são Campanhas Personalizadas e como elas ajudam meu negócio?
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
                  Campanhas personalizadas são estratégias de marketing direcionadas ao público certo, com a mensagem certa. Isso permite que você maximize o impacto de suas ações e aumente os resultados.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 7 - Criação de Landing Pages */}
          <div
            key={6}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(6)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                Como a Criação de Landing Pages ajuda a converter visitantes em leads?
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
                  Landing Pages são páginas de destino otimizadas para conversão. Elas são desenhadas para capturar informações de visitantes e transformá-los em leads qualificados para a sua equipe de vendas.
                </p>
              </>
            )}
          </div>

          {/* Pergunta 8 - Mentoria em Postagem */}
          <div
            key={7}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-300text-gray-300"
              onClick={() => toggleExpanded(7)}
            >
              <h2 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que é a Mentoria em Postagem e como ela pode aprimorar meus criativos?
              </h2>
              <span className="text-gray-400 bg-[#f6472c] rounded-full p-2 transition-colors duration-300 hover:bg-[#f6472c]">
                {expanded === 7 ? (
                  <Minus className="w-6 h-6 text-[#f4f4f4]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#f4f4f4]" />
                )}
              </span>
            </button>

            {expanded === 7 && (
              <>
                <hr className="border-t-2 border-[#f6472c] dark:border-gray-700" />
                <p className="p-6 text-base text-gray-400 dark:text-gray-700">
                  Nossa mentoria em postagem foca no aprimoramento da criação de criativos e copys, ajudando você a gerar resultados eficazes para suas campanhas de marketing digital e engajamento com o público.
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