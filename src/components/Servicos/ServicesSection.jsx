import { Box, Edit, FileText, MessageCircle, Sliders, Target } from "lucide-react"; // Substituindo Funnel por Sliders
import React from "react";

const ServicesSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
      {/* Grid responsivo: 3 colunas em telas grandes, 2 em médias, e 1 em pequenas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Serviço 1: Gestão de CRM */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Box className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Gestão de CRM</h3>
            <p className="mt-1 text-gray-600">
              Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado.
            </p>
          </div>
        </div>

        {/* Serviço 2: Implementação de Chatbots */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <MessageCircle className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Implementação de Chatbots</h3>
            <p className="mt-1 text-gray-600">
              Revolucione seu atendimento ao cliente com chatbots humanizados. Automatize respostas a perguntas frequentes.
            </p>
          </div>
        </div>

        {/* Serviço 3: Criação de Funil de Vendas */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Sliders className="shrink-0 w-8 h-8 text-black" /> {/* Substituindo Funnel por Sliders */}
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Criação de Funil de Vendas</h3>
            <p className="mt-1 text-gray-600">
              Desenvolva funis de vendas inteligentes que guiam seus leads até a conversão de forma eficaz.
            </p>
          </div>
        </div>

        {/* Serviço 4: Campanhas Personalizadas */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Target className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Campanhas Personalizadas</h3>
            <p className="mt-1 text-gray-600">
              Alcance o público certo com a mensagem certa. Impacte sua audiência e veja resultados concretos.
            </p>
          </div>
        </div>

        {/* Serviço 5: Criação de Landing Pages */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <FileText className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Criação de Landing Pages</h3>
            <p className="mt-1 text-gray-600">
              Crie páginas de destino que convertem visitantes em leads, maximizando a eficácia da sua campanha.
            </p>
          </div>
        </div>

        {/* Serviço 6: Mentoria em Postagem */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#81ff94] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Edit className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#81ff94] font-semibold">Mentoria em Postagem</h3>
            <p className="mt-1 text-gray-600">
              Aprimore suas habilidades com nossa mentoria em criação de criativos e copys para gerar resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
