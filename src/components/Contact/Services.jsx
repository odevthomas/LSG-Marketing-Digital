import Header from '../Home/Navbar/Navbar';
import Form from './Form';
import HeroServices from './HeroServices';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

export default () => {
    const plans = [
        {
            name: "Gestão de CRM",
            desc: "Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado. Aumente sua produtividade e fortaleça o relacionamento com seus clientes.",
            isMostPop: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                    <path d="M2 2v17c0 1.66 1.34 3 3 3h17" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            name: "Implementação de Chatbots",
            desc: "Revolucione seu atendimento ao cliente com chatbots humanizados. Automatize respostas a perguntas frequentes e libere sua equipe para tarefas mais estratégicas, garantindo um suporte ágil e eficiente.",
            isMostPop: true,
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4"/><circle cx="7" cy="3" r="1"/><circle cx="17" cy="3" r="1"/><path d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7"/><path d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15"/></g></svg>
            ),
        },
        {
            name: "Criação de Funil de Vendas",
            desc: "Desenvolva funis de vendas inteligentes que guiam seus leads até a conversão de forma eficaz. Nossa equipe está pronta para desenhar o funil perfeito para você!",
            isMostPop: false,
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"/></svg>
            ),
        },
        {
            name: "Campanhas Personalizadas",
            desc: "Alcance o público certo com a mensagem certa. Comece a impactar sua audiência de maneira efetiva e veja resultados concretos.",
            isMostPop: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64"><path fill="currentColor" d="m61.995 3.877l-.062-1.805l-1.812-.069S60.023 2 59.836 2c-2.637 0-16.43.638-29.02 13.224c-3.371 3.368-6.324 6.899-8.715 10.356C12.944 21.872 2 32.808 2 32.808s8.415-3.505 14.489 3.768c-.448 1.541-.649 2.875-.671 4.032l-1.656 1.657c-.485.485-.446 1.313.039 1.799l.399.398l-1.142 1.143c-.279.279-.363.705-.163 1.021c-.807-.155-1.975.38-4.369 1.269c-3.027 1.123-3.585 3.677-3.585 3.677s.976.479 2.406.624c-1.828 2.644-1.409 5.448-1.409 5.448s2.806.418 5.449-1.408c.145 1.43.624 2.405.624 2.405s2.557-.559 3.679-3.587c.902-2.43 1.44-3.597 1.261-4.403c.329.164.773.133 1.029-.123l1.143-1.144l.479.479c.487.485 1.235.446 1.719-.041l1.68-1.677c1.217-.025 2.555-.253 3.988-.668C34.727 53.552 31.202 62 31.202 62s10.969-10.965 7.22-20.128c3.423-2.36 6.95-5.307 10.347-8.701C62.374 19.573 62.018 4.511 61.995 3.877m-45.99 48.586c-.623 1.68-2.039 1.99-2.039 1.99s-.367-.759-.364-1.793c-1.528 1.213-3.253.973-3.253.973s-.239-1.725.974-3.253c-1.036.002-1.794-.364-1.794-.364s.31-1.416 1.99-2.039c1.292-.479 1.934-.764 2.38-.7l2.809 2.808c.063.445-.223 1.087-.703 2.378m7.154-6.246a7 7 0 0 1-1.754-.224l-3.44-3.44c-1.352-5.55 4.495-16.231 14.224-25.957C37.464 11.323 42.985 8.247 47.71 6.45l9.836 9.836c-1.797 4.722-4.873 10.24-10.149 15.513c-8.796 8.792-18.378 14.418-24.238 14.418"/><path fill="currentColor" d="M42.261 16.88a4.853 4.853 0 1 0 0 9.707a4.856 4.856 0 0 0 4.855-4.853a4.856 4.856 0 0 0-4.855-4.854m0 8.088a3.235 3.235 0 1 1-.002-6.47a3.235 3.235 0 0 1 .002 6.47m-9.71 1.617a4.857 4.857 0 0 0-4.855 4.854a4.855 4.855 0 0 0 9.708 0a4.855 4.855 0 0 0-4.853-4.854m-.001 8.088a3.235 3.235 0 1 1 0-6.469a3.234 3.234 0 0 1 3.236 3.236a3.23 3.23 0 0 1-3.236 3.233"/><circle cx="46.905" cy="7.938" r=".809" fill="currentColor"/><circle cx="49.195" cy="10.225" r=".808" fill="currentColor"/><circle cx="51.484" cy="12.513" r=".81" fill="currentColor"/><circle cx="53.771" cy="14.8" r=".81" fill="currentColor"/><path fill="currentColor" d="M56.634 16.516a.81.81 0 0 0-1.146 0a.81.81 0 0 0 0 1.145a.814.814 0 0 0 1.146 0a.81.81 0 0 0 0-1.145"/></svg>
            ),
        },
        {
            name: "Criação de Landing Pages",  // Novo plano
            desc: "Desenvolva páginas de destino personalizadas que convertem visitantes em leads. Nossos designs são otimizados para gerar resultados e maximizar a eficácia da sua campanha.",
            isMostPop: false,
            icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4V10h7Zm9 0h-7V10h7Zm0-12H4V4h16Z"/></svg>
         
            ),
        },
    ];

    return (
        <>
            <Header />
            <HeroServices />
            <section className='py-14'>
                <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                    <div className='text-center'>
                        <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
                            Planos para Todos os Tamanhos de Negócio
                        </h3>
                        <p className='mt-3'>
                            Nossos planos são projetados para atender diferentes necessidades e orçamentos. Descubra qual se encaixa melhor em seu negócio.
                        </p>
                    </div>
                    <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
                        {
                            plans.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`relative flex flex-col rounded-xl border-2 border-gray-300 shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-[#25D366]`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className='flex items-center'>
                                        {item.icon}
                                        <h4 className='text-white font-medium text-xl ml-2'>
                                            {item.name}
                                        </h4>
                                    </div>
                                    <p className='mt-4 text-gray-400'>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Form /> 
            <Footer />
        </>
    );
};
