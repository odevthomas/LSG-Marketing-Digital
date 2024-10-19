import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaUserFriends, FaWhatsapp } from 'react-icons/fa';
import './styles/Testimonials.css'; // Crie um arquivo CSS para estilos personalizados

const testimonials = [
    {
        avatar: "/Instagram-clientes/inbeautyluxury.jpg",
        name: "IN Beauty",
        instagram: "@inbeautyluxury",
        followers: "45,2 mil seguidores",
        link: "https://www.instagram.com/inbeautyluxury/"
    },
    {
        avatar: "/Instagram-clientes/dconceptbr.jpg",
        name: "DCONCEPT",
        instagram: "@dconceptbr",
        followers: "13,5 mil seguidores",
        link: "https://www.instagram.com/dconceptbr/"
    },
    {
        avatar: "/Instagram-clientes/luizgoncalvesconnection.jpg",
        name: "LUIZ GONÇALVES",
        instagram: "@luizgoncalvesconnection",
        followers: "24,6 mil seguidores",
        link: "https://www.instagram.com/luizgoncalvesconnection/"
    },
    {
        avatar: "/Instagram-clientes/casalellit.jpg",
        name: "Casa L’Ellit",
        instagram: "@casalellit",
        followers: "42,1 mil seguidores",
        link: "https://www.instagram.com/casalellit/"
    },
    {
        avatar: "/Instagram-clientes/amovacinasoficial.jpg",
        name: "Amo Vacinas",
        instagram: "@amovacinasoficial",
        followers: "8.898 seguidores",
        link: "https://www.instagram.com/amovacinasoficial/"
    },
    {
        avatar: "/Instagram-clientes/casavrsalao.jpg",
        name: "CASA VR",
        instagram: "@casavrsalao",
        followers: "6.364 seguidores",
        link: "https://www.instagram.com/casavrsalao/"
    },
    {
        avatar: "/Instagram-clientes/tominnicelli.jpg",
        name: "Tom Minnicelli",
        instagram: "@tominnicelli",
        followers: "5.013 seguidores",
        link: "https://www.instagram.com/tominnicelli/"
    },
    {
        avatar: "/Instagram-clientes/novo_olhar_revelesuabeleza.jpg",
        name: "Kely Santana",
        instagram: "@novo_olhar_revelesuabeleza",
        followers: "9.755 seguidores",
        link: "https://www.instagram.com/novo_olhar_revelesuabeleza/"
    },
];

const Testimonials = () => {
    const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(4);
    const [scrollCount, setScrollCount] = useState(0);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < testimonials.length) {
                setVisibleTestimonials(prev => {
                    const nextTestimonials = [...prev];
                    nextTestimonials.shift(); // Remove o primeiro
                    nextTestimonials.push(testimonials[currentIndex]); // Adiciona o próximo
                    setCurrentIndex(prevIndex => prevIndex + 1);
                    return nextTestimonials;
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollCount(prev => prev + 1);
            if (scrollCount >= 1) {
                setIsButtonVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollCount]);

    return (
        <section className="py-14 my-10 bg-white mt-18" aria-labelledby="client-testimonials">
            <div className="w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center mb-12 md:mb-0">
                    <header>
                      <p className="text-[#333] font-semibold mb-6 mt-4 text-lg">
    Nossos clientes são nossa maior motivação.
</p>


                        <h3 className="text-black text-4xl font-semibold mb-5">
                            Nossos Clientes!
                        </h3>

                        <p className="text-black">
                         Estamos comprometidos em fornecer serviços personalizados que atendam às necessidades específicas de cada cliente, garantindo resultados significativos e duradouros.
                        </p>
                
                    </header>
                </div>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    {visibleTestimonials.map((item, idx) => (
                        <Card 
                            key={idx} 
                            className="max-w-md bg-[#212121] transition-transform transform hover:scale-105 shadow-lg"
                        >
                            <CardHeader className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-3">
                                    <Avatar isBordered radius="full" size="md" src={item.avatar} />
                                    <div className="flex flex-col">
                                        <h4 className="text-gray-400 font-semibold">{item.name}</h4>
                                        <span className="flex items-center text-gray-500 text-xs">
                                            <FaUserFriends className="mr-1" aria-hidden="true" />
                                            {item.followers}
                                        </span>
                                        <span className="flex items-center text-gray-500 text-xs">
                                            <FaInstagram className="mr-1" aria-hidden="true" />
                                            {item.instagram}
                                        </span>
                                    </div>
                                </div>
                                <Button 
                                    size="sm" 
                                    style={{ backgroundColor: '#b3b3b3', color: '#010101' }} 
                                    variant="solid" 
                                    onClick={() => window.open(item.link, '_blank')}
                                >
                                    Seguir
                                </Button>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                {isButtonVisible && (
                    <div className="whatsapp-button vibrate mt-6" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5519981331191&text&type=phone_number&app_absent=0', '_blank')}>
                        <FaWhatsapp size={30} color="white" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;

