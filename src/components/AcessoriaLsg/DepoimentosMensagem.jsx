import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Eye, CheckCircle } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndices((prevIndices) => 
        prevIndices.map((index) => (index + 1) % mensagens.length)
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="py-16 bg-black relative overflow-hidden"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="depoimentos-titulo"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Resultados Reais de Clientes Reais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos desafios em sucessos mensuráveis. Veja o que nossos clientes dizem sobre o impacto das nossas estratégias digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentMessageIndices.map((index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] border border-[#f11414]/20 rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-[#f11414] mr-3" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {mensagens[index].cliente}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {mensagens[index].hora}
                    </span>
                  </div>
                </div>

                <p className="text-gray-200 mb-4 italic">
                  "{mensagens[index].texto}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-500">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="text-sm">Verificado</span>
                  </div>
                  {mensagens[index].visualizado && (
                    <div className="flex items-center text-gray-400">
                      <Eye size={20} className="mr-2" />
                      <span className="text-sm">Visualizado</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-[#f11414]/10 opacity-50 -z-10"></div>
    </section>
  );
};

export default Depoimentos;
