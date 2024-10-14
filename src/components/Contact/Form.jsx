export default () => {
    const servicesItems = ["Desenvolvimento Mobile", "Design UI/UX", "Desenvolvimento Web", "SEO"];

    return (
        <main className="flex overflow-hidden">
            <div className="hidden lg:flex flex-1">
                <img src="/img/hero.jpg" className="w-full h-screen object-cover" alt="Imagem de destaque" />
            </div>
            <div className="flex-1 py-12 lg:flex lg:justify-center lg:h-screen bg-[#131313]"> {/* Fundo #131313 */}
                <div className="max-w-lg mx-auto px-4 text-gray-300"> {/* Texto em um tom mais claro para contraste */}
                    <div className="text-center">
                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                            Quer saber mais sobre nossos serviços?
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Preencha o formulário abaixo e nossa equipe entrará em contato com você!
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium text-gray-300">
                                Seu nome
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-[#212121] border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-[#212121] border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-300">
                                Contato
                            </label>
                            <input
                                type="tel"
                                placeholder="+55 (11) 0000-0000"
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-[#212121] border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-300">
                                Mensagem
                            </label>
                            <textarea
                                required
                                className="w-full mt-2 h-32 px-3 py-2 text-white bg-[#212121] border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                            ></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-black font-medium bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 rounded-lg transition duration-150"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
