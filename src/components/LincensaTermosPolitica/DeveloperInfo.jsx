import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const DeveloperInfo = () => {
  return (
    <section 
      className="bg-black text-white py-20 px-4 font-satoshi"
      aria-labelledby="developer-hero"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="overflow-hidden">
            <h1 
              id="developer-hero" 
              className="text-5xl font-bold mb-4 text-[#f11414] 
              transform translate-y-full opacity-0 animate-slide-up"
            >
              Thomas Eduardo R Nascimento
            </h1>
            
            <p 
              className="text-xl leading-relaxed text-gray-300 
              transform translate-y-full opacity-0 animate-slide-up delay-100"
            >
              Desenvolvedor Frontend especializado em criar experiências digitais 
              inovadoras que transformam conceitos em interfaces elegantes e 
              funcionais, conectando marcas com seus usuários de forma impactante.
            </p>
          </div>
          
          {/* Contato Estratégico */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 
              transform translate-y-full opacity-0 animate-slide-up delay-200">
              <FaEnvelope className="text-[#f11414]" size={28} />
              <a 
                href="mailto:developer.thomas@outlook.com" 
                className="text-lg hover:text-[#f11414] transition-colors"
                aria-label="Entre em contato por e-mail"
              >
                developer.thomas@outlook.com
              </a>
            </div>
            
            {/* Redes Sociais com Efeito */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#f11414]">
                Conecte-se
              </h3>
              <div className="flex space-x-6">
                {[
                  { 
                    Icon: FaLinkedin, 
                    href: "https://www.linkedin.com/in/devthm/",
                    label: "LinkedIn" 
                  },
                  { 
                    Icon: FaGithub, 
                    href: "https://github.com/devthmedu",
                    label: "GitHub" 
                  },
                  { 
                    Icon: FaInstagram, 
                    href: "https://www.instagram.com/_devthm/",
                    label: "Instagram" 
                  }
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-white hover:text-[#f11414] transition-all duration-300
                      transform hover:scale-110 opacity-0 animate-slide-up
                    `}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                    aria-label={`Perfil no ${label}`}
                  >
                    <Icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp CTA Moderno */}
        <div className="flex justify-center items-center">
          <a 
            href="https://wa.me/19999042072" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="
              group relative overflow-hidden px-10 py-5 
              bg-[#f11414] text-white rounded-full text-xl font-bold
              flex items-center gap-4 
              hover:bg-opacity-90 transition-all duration-300
              transform hover:scale-105 shadow-2xl
            "
            aria-label="Iniciar conversa no WhatsApp"
          >
            <div className="absolute inset-0 bg-white opacity-0 
              group-hover:opacity-10 transition-opacity duration-300">
            </div>
            <FaWhatsapp size={32} className="group-hover:rotate-6 transition-transform" />
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfo;
