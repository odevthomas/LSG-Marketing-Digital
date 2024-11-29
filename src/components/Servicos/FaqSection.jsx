import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ícones de "expandir" e "fechar"

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 lg:text-4xl dark:text-white mb-12">
          Perguntas Frequentes sobre nossos serviços
        </h1>

        {/* Container de Grid - 2 colunas em telas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pergunta 1 - Atendimento com Chatbots Inteligentes */}
          <div
            key={0}
            className="border border-gray-100 rounded-lg dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <button
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(0)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que é um Atendimento com Chatbots Inteligentes?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 0 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 0 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(1)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                Como funciona a Demonstração Grátis?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 1 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 1 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(2)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que é um sistema de Gestão de CRM?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 2 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 2 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(3)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                Como a Implementação de Chatbots pode ajudar meu negócio?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 3 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 3 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(4)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que é um Funil de Vendas e como ele pode ajudar?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 4 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 4 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(5)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que são Campanhas Personalizadas e como elas ajudam meu negócio?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 5 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 5 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(6)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                Como a Criação de Landing Pages ajuda a converter visitantes em leads?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 6 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 6 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
              className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => toggleExpanded(7)}
            >
              <h1 className="font-semibold text-lg text-gray-700 dark:text-white">
                O que é a Mentoria em Postagem e como ela pode aprimorar meus criativos?
              </h1>
              <span className="text-gray-500 bg-gray-200 rounded-full p-2 transition-colors duration-300 hover:bg-[#81ff94]">
                {expanded === 7 ? (
                  <Minus className="w-6 h-6 text-[#1DA65D]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1DA65D]" />
                )}
              </span>
            </button>

            {expanded === 7 && (
              <>
                <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
                <p className="p-6 text-sm text-gray-500 dark:text-gray-300">
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
