import React, { useState } from 'react';

const ContactForm = () => {
    const servicesItems = [
        "Gestão de CRM",
        "Implementação de Chatbots",
        "Criação de Funil de Vendas",
        "Campanhas Personalizadas"
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Validar os dados do formulário (opcional)
        if (!formData.name || !formData.email || !formData.contact || !formData.message) {
            setStatusMessage('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Reseta os campos do formulário
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    message: '',
                });
                setStatusMessage('Formulário enviado com sucesso!');
                setIsModalOpen(true); // Abre o modal
            } else {
                setStatusMessage('Erro ao enviar o formulário. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro:', error); // Log do erro
            setStatusMessage('Erro ao enviar o formulário. Tente novamente mais tarde.');
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                    {statusMessage && (
                        <div className="mt-4 text-center text-red-500">{statusMessage}</div>
                    )}
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
                    <form onSubmit={handleSubmit} className="space-y-6 mt-8 lg:pb-12">
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">Seu nome</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">Contato</label>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="+55 (11) 9999-9999"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Contato"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-800 mb-1">Mensagem</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-32 px-4 py-2 text-gray-800 bg-gray-200 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                aria-label="Mensagem"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-green-500 hover:bg-green-400 active:bg-green-600 rounded-lg transition duration-150 transform hover:scale-105"
                            aria-label="Enviar"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal de Sucesso */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h4 className="text-lg font-semibold text-green-500">Sucesso!</h4>
                        <p className="mt-2 text-gray-800">Seu formulário foi enviado com sucesso.</p>
                        <button
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
                            onClick={handleCloseModal}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ContactForm;
