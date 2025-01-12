import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";

const Depoimentos = () => {
  const mensagens = [
    { texto: "Oi Lucas, estou impressionado com o crescimento que vi após as campanhas! Nunca pensei que poderia crescer tanto!", cliente: "Lucas P.", hora: "10:30", visualizado: true },
    { texto: "Bom dia! Minhas vendas estão subindo como nunca! Obrigada pela ajuda, estou muito feliz!", cliente: "Juliana S.", hora: "10:45", visualizado: true },
    { texto: "Oi, Carlos! A automação tornou minha vida muito mais fácil. Agora posso focar no que realmente importa!", cliente: "Carlos S.", hora: "11:00", visualizado: false },
    { texto: "Boa tarde, Mariana! O aumento de tráfego é fantástico! Estou alcançando pessoas que nunca pensei que chegaria!", cliente: "Mariana O.", hora: "11:15", visualizado: true },
    { texto: "Oi Lucas! As campanhas estão trazendo resultados incríveis! Mais leads e vendas do que eu esperava!", cliente: "Ricardo A.", hora: "11:30", visualizado: true },
    { texto: "Oi, Fernanda! O remarketing está funcionando de maneira surpreendente! O retorno é realmente excelente.", cliente: "Fernanda C.", hora: "11:45", visualizado: false },
    { texto: "Oi, André! Estou adorando os resultados! As vendas dispararam e a equipe está mais motivada!", cliente: "André M.", hora: "12:00", visualizado: true },
    { texto: "Oi Lucas! As estratégias de marketing digital mudaram completamente meu negócio! Muito obrigado!", cliente: "Beatriz L.", hora: "12:15", visualizado: true },
    { texto: "Oi, Carlos! As ideias que vocês trouxeram foram incríveis! Estou ansioso para ver os resultados!", cliente: "Carlos T.", hora: "12:30", visualizado: true },
    { texto: "Boa tarde, Danielle! A equipe de suporte é fantástica! Sempre prontos para ajudar quando eu preciso.", cliente: "Danielle F.", hora: "14:00", visualizado: true },
    { texto: "Oi, Eduardo! Os relatórios são super detalhados! Estou entendendo melhor meu público-alvo.", cliente: "Eduardo G.", hora: "14:15", visualizado: true },
    { texto: "Oi, França! Estou impressionada com a eficiência das campanhas! O retorno é muito positivo!", cliente: "França N.", hora: "14:30", visualizado: true },
    { texto: "Oi, Gustavo! A comunicação com a equipe é excelente! Sempre disponíveis para esclarecer minhas dúvidas.", cliente: "Gustavo K.", hora: "15:00", visualizado: true },
    { texto: "Oi, Helena! O atendimento ao cliente é nota 10! Sempre me sinto valorizado como cliente!", cliente: "Helena P.", hora: "15:15", visualizado: true },
    { texto: "Oi Igor! As promoções estão atraindo novos clientes! Estou vendo um aumento nas visitas!", cliente: "Igor R.", hora: "15:30", visualizado: true },
    { texto: "Oi, Jéssica! Estou muito satisfeito com o serviço prestado. A equipe é muito profissional!", cliente: "Jéssica D.", hora: "16:00", visualizado: true },
    { texto: "Oi, Karina! Estou amando os resultados das redes sociais! Meu engajamento disparou!", cliente: "Karina B.", hora: "16:15", visualizado: true },
    { texto: "Oi Lucas! O suporte técnico é excepcional! Resolvi um problema rapidamente!", cliente: "Leonardo Q.", hora: "16:30", visualizado: true },
    { texto: "Oi Mariana! Aumentei meu alcance e estou atraindo novos clientes todo dia! Obrigado!", cliente: "Mariana P.", hora: "17:00", visualizado: true },
    { texto: "Oi Nicolas! As estratégias de SEO estão funcionando maravilhosamente bem! Estou nas primeiras posições!", cliente: "Nicolas T.", hora: "17:15", visualizado: true },
    { texto: "Oi Olívia! As campanhas de e-mail marketing geraram um excelente retorno! Estou impressionada!", cliente: "Olívia J.", hora: "17:30", visualizado: true },
    { texto: "Oi Paula! Agradeço à equipe pela atenção e dedicação! Estou muito feliz com os resultados!", cliente: "Paula C.", hora: "17:45", visualizado: true },
    { texto: "Oi Rafael! O crescimento nas vendas é notável! Estou recomendando a todos os meus amigos!", cliente: "Rafael M.", hora: "18:00", visualizado: true },
    { texto: "Oi Sofia! As campanhas de publicidade estão me trazendo resultados surpreendentes!", cliente: "Sofia L.", hora: "18:15", visualizado: true },
    { texto: "Oi Tiago! Obrigado por tornar meu negócio mais visível! Estou realmente impressionado!", cliente: "Tiago F.", hora: "18:30", visualizado: true },
    { texto: "Oi Ursula! A interação com os clientes tem aumentado! Estou conseguindo feedbacks valiosos!", cliente: "Ursula H.", hora: "18:45", visualizado: true },
    { texto: "Oi Vinícius! Estou vendo um aumento real no meu público-alvo! Esses resultados são fantásticos!", cliente: "Vinícius J.", hora: "19:00", visualizado: true },
    { texto: "Oi Wilma! O planejamento estratégico está funcionando perfeitamente! Estou muito satisfeito!", cliente: "Wilma B.", hora: "19:15", visualizado: true },
    { texto: "Oi Xavier! As reuniões mensais têm sido muito produtivas! Estou aprendendo muito!", cliente: "Xavier N.", hora: "19:30", visualizado: true },
    { texto: "Oi Yasmin! As vendas cresceram 50% em apenas um mês! Preciso compartilhar essa experiência!", cliente: "Yasmin P.", hora: "20:00", visualizado: true },
    { texto: "Oi Zé! Estou muito satisfeito com a agilidade da equipe em resolver meus problemas!", cliente: "Zé R.", hora: "20:15", visualizado: true },
    { texto: "Oi Ana! As dicas de marketing foram extremamente úteis! Estou aplicando tudo!", cliente: "Ana T.", hora: "20:30", visualizado: true },
    { texto: "Oi Clara! Mensagem recebida agora! Visualizado.", cliente: "Clara S.", hora: "20:45", visualizado: true },
    { texto: "Oi Eduarda! O feedback que recebo dos meus clientes é positivo, graças ao trabalho de vocês!", cliente: "Eduarda P.", hora: "21:00", visualizado: true },
    { texto: "Oi Fabio! Estou animado com as novas estratégias que estamos implementando!", cliente: "Fabio Q.", hora: "21:15", visualizado: true },
    { texto: "Oi Gabriel! As vendas estão bombando! Estão superando minhas expectativas!", cliente: "Gabriel M.", hora: "21:30", visualizado: true },
  ];

  const [currentMessageIndices, setCurrentMessageIndices] = useState([0, 1, 2]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndices((prevIndices) => {
        const nextIndices = prevIndices.map((index) => (index + 1) % mensagens.length);
        return nextIndices;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-8 relative bg-white w-full"
      aria-labelledby="depoimentos"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>

      <div className="relative w-full px-4 md:px-8">
        <div className="flex flex-col items-center text-center mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold">
            O Que Nossos Clientes Dizem em Tempo Real
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-900">
            Seus feedbacks são nossa maior motivação para continuarmos oferecendo soluções digitais de excelência em tempo real. Obrigado por confiarem na LSG Digital!
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-6">
          <AnimatePresence>
            {currentMessageIndices.map((index) => (
              <motion.div
                key={index}
                className={`bg-[#000] text-white rounded-lg shadow-lg p-6 flex items-start space-x-3 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                style={{ borderRadius: "20px" }}
              >
                <div className="flex flex-col w-full">
                  <div className="flex items-center mb-2 justify-between">
                    <div className="flex items-center">
                      <MessageCircle size={24} className="text-green-600 mr-2" />
                      <span className="text-sm font-semibold">{mensagens[index].cliente}</span>
                      <span className="text-xs text-gray-500 ml-2">{mensagens[index].hora}</span>
                    </div>
                    <span className="text-xs text-gray-500">Mensagem recebida</span>
                  </div>
                  <div className="text-sm">{mensagens[index].texto}</div>
                  {mensagens[index].visualizado && (
                    <div className="flex items-center mt-2">
                      <Eye size={16} className="text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">Visualizado</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Depoimentos;
