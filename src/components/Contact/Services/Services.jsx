import Form from '../Form'; // Ajuste na importação do Form
import Header from '../../Home/Navbar/Navbar'; // Ajuste na importação do Header

export default () => {
    const plans = [
        {
            name: "Gestão de CRM",
            desc: "Organize seus contatos e transforme leads em clientes fiéis com um sistema de CRM otimizado. Aumente sua produtividade e fortaleça o relacionamento com seus clientes.",
            isMostPop: false,
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                   <path d="M2 2v17c0 1.66 1.34 3 3 3h17" stroke="#ffb23e" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7" stroke="#ffb23e" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            ),
        },
        {
            name: "Criação de Funil de Vendas",
            desc: "Desenvolva funis de vendas inteligentes que guiam seus leads até a conversão de forma eficaz. Nossa equipe está pronta para desenhar o funil perfeito para você!",
            isMostPop: true,
            icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb23e" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter">
                 <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
             </svg>
            ),
        },
        {
            name: "Campanhas Personalizadas",
            desc: "Alcance o público certo com a mensagem certa. Comece a impactar sua audiência de maneira efetiva e veja resultados concretos.",
            isMostPop: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb23e" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Header />
            <section className='py-14'>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className='text-center'>
                        <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                            Planos para todos os tamanhos de negócio
                        </h3>
                        <p className='mt-3'>
                            Nossos planos são projetados para atender diferentes necessidades e orçamentos. Descubra qual se encaixa melhor em seu negócio.
                        </p>
                    </div>
                    <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {
                            plans.map((item, idx) => (
                                <div key={idx} className={`relative flex flex-col rounded-xl border-2 bg-white shadow-lg p-6 transition-transform duration-300 hover:shadow-xl ${item.isMostPop ? "border-indigo-600" : "border-gray-300"}`}>
                                    <div className='flex items-center'>
                                        {item.icon}
                                        <h4 className='text-indigo-600 font-medium text-lg ml-2'>
                                            {item.name}
                                        </h4>
                                    </div>
                                    <p className='mt-4 text-gray-600'>
                                        {item.desc}
                                    </p>
                                  
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Form /> {/* Formulário exibido após a seção de planos */}
        </>
    );
};
