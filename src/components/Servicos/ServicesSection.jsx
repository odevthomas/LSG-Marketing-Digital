import { Box, Edit, FileText, MessageCircle, Sliders, Target } from "lucide-react";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
      {/* Grid responsivo: 3 colunas em telas grandes, 2 em médias, e 1 em pequenas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Serviço 1: Gestão de CRM */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Box className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#fb1603] text-xl font-semibold">Gestão de CRM</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20saber%20mais%20sobre%20gest%C3%A3o%20de%20CRM&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Quer otimizar a gestão de seus clientes? Clique aqui!
            </a>
          </div>
        </div>

        {/* Serviço 2: Implementação de Chatbots */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <MessageCircle className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#f6472c] text-xl font-semibold">Implementação de Chatbots</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Revolucione seu atendimento ao cliente com chatbots humanizados. Automatize respostas a perguntas frequentes.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20implementar%20um%20chatbot%20agora&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Pronto para otimizar seu atendimento? Clique aqui e implemente seu chatbot agora!
            </a>
          </div>
        </div>

        {/* Serviço 3: Criação de Funil de Vendas */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Sliders className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#f6472c] text-xl font-semibold">Criação de Funil de Vendas</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Desenvolva funis de vendas inteligentes que guiam seus leads até a conversão de forma eficaz.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20criar%20um%20funil%20de%20vendas&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Quer aumentar suas conversões? Fale com um especialista e crie seu funil de vendas hoje mesmo!
            </a>
          </div>
        </div>

        {/* Serviço 4: Campanhas Personalizadas */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Target className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#f6472c] text-xl font-semibold">Campanhas Personalizadas</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Alcance o público certo com a mensagem certa. Impacte sua audiência e veja resultados concretos.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20fazer%20campanhas%20personalizadas&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Impulsione suas vendas agora! Fale com um especialista e comece sua campanha!
            </a>
          </div>
        </div>

        {/* Serviço 5: Criação de Landing Pages */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <FileText className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#f6472c] text-xl font-semibold">Criação de Landing Pages</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Crie páginas de destino que convertem visitantes em leads, maximizando a eficácia da sua campanha.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20criar%20uma%20landing%20page&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Quer converter mais visitantes? Crie sua landing page de alta performance agora!
            </a>
          </div>
        </div>

        {/* Serviço 6: Mentoria em Postagem */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center items-center w-16 h-16 bg-[#f4f4f4] rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-xl">
            <Edit className="shrink-0 w-8 h-8 text-black" />
          </div>
          <div className="mt-5">
            <h3 className="text-[#f6472c] text-xl font-semibold">Mentoria em Postagem</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Aprimore suas habilidades com nossa mentoria em criação de criativos e copys para gerar resultados.
            </p>
            {/* CTA para WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5519981331191&text=Quero%20iniciar%20minha%20mentoria&type=phone_number&app_absent=0"
              className="mt-4 inline-flex items-center justify-center gap-x-2 py-2 px-6 text-black bg-[#fff] hover:bg-[#f6472c] hover:text-white rounded-lg shadow-lg transition-all duration-300 uppercase w-full"
              style={{ minHeight: '50px' }} // Garantir a altura consistente
            >
              Quer criar postagens que geram resultados? Inicie sua mentoria agora e leve suas campanhas ao próximo nível!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
