export default () => {
    const servicesItems = [
        "Gestão de CRM",
        "Implementação de Chatbots",
        "Criação de Funil de Vendas",
        "Campanhas Personalizadas"
    ];

    return (
        <main className="flex overflow-hidden">
            <div className="hidden lg:flex flex-1">
                <img src="/img/hero.jpg" className="w-full h-[172vh] object-cover" alt="Imagem de destaque" />
            </div>
            <div className="flex-1 py-12 lg:flex lg:justify-center lg:h-[172vh] bg-white">
                <div className="max-w-lg mx-auto px-4 text-gray-800">
                    <div className="text-center">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Quer saber mais sobre nossos serviços?
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Preencha o formulário abaixo e nossa equipe entrará em contato com você!
                        </p>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-gray-800 text-2xl font-semibold mb-4">Nossos Serviços:</h4>
                        <ul className="text-gray-600 space-y-2">
                            {servicesItems.map((service, index) => (
                                <li key={index} className="border-b border-gray-300 pb-2">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-6 mt-8 lg:pb-12"
                    >
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">
                                Seu nome
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                aria-label="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                aria-label="Email"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">
                                Contato
                            </label>
                            <input
                                type="tel"
                                placeholder="+55 (11) 0000-0000"
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                aria-label="Contato"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">
                                Mensagem
                            </label>
                            <textarea
                                required
                                className="w-full h-32 px-4 py-2 text-gray-800 bg-gray-200 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                aria-label="Mensagem"
                            ></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-green-500 hover:bg-green-400 active:bg-green-600 rounded-lg transition duration-150 transform hover:scale-105"
                            aria-label="Enviar"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};
