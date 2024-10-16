import { Facebook, Instagram, Mail } from 'lucide-react'; // Importe os ícones disponíveis
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const footerNavs = [
        {
            label: "Contato",
            items: [
                { 
                    href: 'mailto:comercial@lsgdigital.com.br', 
                    name: 'Email', 
                    icon: <Mail className="w-4 h-4 inline mr-1 text-[#fff]" /> 
                },
                {
                    href: 'https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0',
                    name: 'WhatsApp',
                    icon: (
                        <span className="w-4 h-4 inline mr-1 text-[#fff]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
                            </svg>
                        </span>
                    )
                }
            ]
        },
    ];

    const socialLinks = [
        {
            href: "https://www.instagram.com/lucas.assessoria/",
            icon: <Instagram className="w-5 h-5 text-[#E1306C]" />,
        },
        {
            href: "https://www.facebook.com/",
            icon: <Facebook className="w-5 h-5 text-[#3b5998]" />,
        },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        setMessage(`Você se inscreveu com sucesso! Um email de confirmação foi enviado para ${email}.`);
        setEmail('');
    };

    return (
        <footer className="text-gray-300 bg-[#000] w-full px-4 py-5 md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <img 
                        src="img/logo-2.png" 
                        className="w-32 border-none shadow-none" 
                        alt="Logo LSG Digital" 
                    />
                    <p className="mt-2 text-sm">A LSG Digital oferece soluções de marketing digital a partir de R$599/mês.</p>
                    <form onSubmit={handleSubscribe}>
                        <label className="block pt-4 text-sm">Mantenha-se atualizado</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className="w-full p-2.5 mt-2 bg-gray-700 text-gray-300 outline-none"
                            required
                        />
                        <button className="mt-2 p-2.5 rounded-md text-black" style={{ backgroundColor: '#fff' }}>Inscrever-se</button>
                    </form>
                    {message && <p className="mt-2 text-sm text-green-400">{message}</p>}
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {footerNavs.map((nav, idx) => (
                        <ul className="space-y-4" key={idx}>
                            <h4 className="text-gray-200 font-medium text-sm">{nav.label}</h4>
                            {nav.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-center">
                                    <a href={item.href} className="hover:underline hover:text-yellow-400 text-xs flex items-center">
                                        {item.icon} 
                                        <span className="ml-4">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="mt-8 py-6 border-t border-gray-600 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-xs">
                    &copy; 2022 LSG Digital. Todos os direitos reservados.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {socialLinks.map((social, idx) => (
                            <li key={idx}>
                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
