import { useState } from "react";
import React from 'react';

const Avaliacao = () => {
    const testimonials = [
        {
            avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/350402596_5978086568964620_2951162146556086756_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=105&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=O0rnushpYgkQ7kNvgGBRP3E&_nc_ht=scontent.cdninstagram.com&oh=00_AYBjTd2fVTBcKjjG8KMSObuizaQC4B4rtgvqsAQUBXRoGA&oe=6711C007",
            name: "Pedro Henrique Tonin",
            quote: "“Eu virei cliente da Hazap após receber algumas propagandas da empresa em meu Instagram. Fiquei positivamente surpreso com a qualidade do atendimento durante a venda e, ainda mais, no pós-venda. Sempre que tenho alguma dúvida sobre a máquina (software/hardware) sou muito bem atendido. Gostaria de deixar destacado o excelente atendimento do Matheus. O cara é show.”",
            rating: 5,
        },
        {
            avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/449717161_1458191511476709_2286688843264636556_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=102&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=naPV-HABZlEQ7kNvgHFYnK3&_nc_ht=scontent.cdninstagram.com&oh=00_AYDUqLd1KkcZM_jAPgHCF1so4KieBSIeuUMCyCPCnHRJ7w&oe=6711D77F",
            name: "Floya Design",
            quote: "“Com a LSG, minha empresa viu um crescimento significativo nas vendas. Recomendo a todos!”",
            rating: 4,
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const StarRating = ({ rating }) => (
        <div className="flex justify-center space-x-1 mt-2">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                </svg>
            ))}

        </div>
    );

    return (
        <section className="py-14 bg-white text-black"> {/* Fundo branco e texto preto */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                   <h3 className="text-[#212121] text-4xl sm:text-4xl font-extrabold mb-5 mt-4 text-center">O que nossos clientes dizem</h3>

                    <ul>
                        {testimonials.map((item, idx) => (
                            currentTestimonial === idx && (
                                <li key={idx}>
                                    <figure className="relative">
                                        <blockquote>
                                            <p className="text-gray-800 text-lg sm:text-xl italic font-light"> {/* Texto escurecido */}
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                        <div className="mt-4 flex flex-col items-center">
                                            <img src={item.avatar} alt={item.name} className="w-16 h-16 mx-auto rounded-full border-2 border-[#333]" />
                                            <div className="mt-3">
                                                <span className="block text-gray-800 font-semibold text-lg">{item.name}</span> {/* Texto escurecido */}
                                                <StarRating rating={item.rating} />
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {testimonials.map((_, idx) => (
                            <li key={idx}>
                                <button
                                    className={`w-3 h-3 rounded-full duration-150 ring-offset-2 ring-[#b3b3b3] focus:ring ${currentTestimonial === idx ? "bg-[#b3b3b3]" : "bg-gray-300"}`}
                                    onClick={() => setCurrentTestimonial(idx)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Avaliacao;
