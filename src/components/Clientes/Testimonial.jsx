import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaUserFriends, FaWhatsapp } from 'react-icons/fa';
import './styles/Testimonials.css'; // Crie um arquivo CSS para estilos personalizados

const testimonials = [
    {
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/440639645_978783430285411_8612163735245464371_n.jpg?ccb=11-4&oh=01_Q5AaIDROnTXXgEXatD6G1OMqduIJZ5pDGa_ex6Zqm8cOg_iE&oe=670F8A43&_nc_sid=5e03e0&_nc_cat=110",
        name: "IN Beauty",
        instagram: "@inbeautyluxury",
        followers: "45,2 mil seguidores",
        link: "https://www.instagram.com/inbeautyluxury/"
    },
    {
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/346938865_210752247951379_6525012530753790999_n.jpg?ccb=11-4&oh=01_Q5AaIAtDMqn3uLnrZ6AsafF2Z2sdkPsLjEZo6UeNmlyNjKBS&oe=670F81A6&_nc_sid=5e03e0&_nc_cat=101",
        name: "DCONCEPT",
        instagram: "@dconceptbr",
        followers: "13,5 mil seguidores",
        link: "https://www.instagram.com/dconceptbr/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/355416030_1971476043197213_5941458899012046289_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=108&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=r1oBeMp87A4Q7kNvgH2TqPQ&_nc_ht=scontent.cdninstagram.com&oh=00_AYBHDtq4mXrn_ESbWyQzfUdcDhE16XuqHhZ3gLl1necU9w&oe=6711AA3F",
        name: "LUIZ GONÇALVES",
        instagram: "@luizgoncalvesconnection",
        followers: "24,6 mil seguidores",
        link: "https://www.instagram.com/luizgoncalvesconnection/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/398301596_282823151402933_368550342658046539_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=aiNInKLUoPcQ7kNvgErIcLI&_nc_ht=scontent.cdninstagram.com&oh=00_AYAxigutK18FQ2H-aSjZiKKKx9CpJ73y2g9uhwXUFZcAvw&oe=67118E60",
        name: "Casa L’Ellit",
        instagram: "@casalellit",
        followers: "42,1 mil seguidores",
        link: "https://www.instagram.com/casalellit/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/461748001_551492894078868_5784138435294228408_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=105&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=wEi01omQBnEQ7kNvgFCS2AU&_nc_ht=scontent.cdninstagram.com&oh=00_AYDTkuTu0uIXeIy8ajhpABKgqiiQqFmYwsd8bJcGT4XFDg&oe=67119392",
        name: "Amo Vacinas",
        instagram: "@amovacinasoficial",
        followers: "8.898 seguidores",
        link: "https://www.instagram.com/amovacinasoficial/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/278132100_4820323688065357_2736621758705087379_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=k6OoIRpXr9gQ7kNvgG3RNtf&_nc_ht=scontent.cdninstagram.com&oh=00_AYAdmmH9KPvi__BIYl9QREJut_jl-5wXBG_x5vUGh788UA&oe=67117908",
        name: "CASA VR",
        instagram: "@casavrsalao",
        followers: "6.364 seguidores",
        link: "https://www.instagram.com/casavrsalao/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/445278519_1197948554968141_7992028756928377274_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=103&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=Uxs08yYbWFcQ7kNvgFXJs2G&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDwWcPxXrWbUAfdFr88Uam5fKT0PKrGigV9IGc6y2zESQ&oe=67144682",
        name: "Tom Minnicelli",
        instagram: "@tominnicelli",
        followers: "5.013 seguidores",
        link: "https://www.instagram.com/tominnicelli/"
    },
    {
        avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/456711593_513679507883478_3065663962680660730_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=107&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=qJQ0ED6bDXwQ7kNvgGdYDNM&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYAXHd3qBfSIkV-K_pn7NCmEGYgw8mh15fY12gnvMzMI9w&oe=67144284",
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
                          O feedback deles não só nos inspira, mas também nos ajuda a evoluir continuamente.
                        </p>
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

