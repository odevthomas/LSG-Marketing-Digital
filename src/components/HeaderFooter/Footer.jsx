import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => setModalContent(type);
  const closeModal = () => setModalContent(null);

  const renderModal = () => {
    const contentMap = {
      sobre: {
        title: "Sobre o Desenvolvedor",
        body: (
          <>
            <p className="mb-3">
              Este site foi desenvolvido por <strong>Thomas Eduardo</strong>, desenvolvedor frontend especializado em interfaces modernas e intuitivas.
            </p>
            <p className="mb-3">
              E-mail: <a href="mailto:developer.thomas@outlook.com.br" className="underline">developer.thomas@outlook.com.br</a>
            </p>
            <p className="mb-2">Redes sociais:</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/devthm/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white/80 hover:text-white" size={20} /></a>
              <a href="https://github.com/devthmedu" target="_blank" rel="noopener noreferrer"><FaGithub className="text-white/80 hover:text-white" size={20} /></a>
              <a href="https://www.instagram.com/_devthm/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white/80 hover:text-white" size={20} /></a>
            </div>
          </>
        )
      },
      privacidade: {
        title: "Política de Privacidade",
        body: (
          <p className="mb-4">
            Respeitamos sua privacidade. Seus dados são usados apenas para melhorar sua experiência. Qualquer dúvida, entre em contato via <a href="mailto:comercial@lsgdigital.com.br" className="underline">comercial@lsgdigital.com.br</a>.
          </p>
        )
      },
      termos: {
        title: "Termos de Uso",
        body: (
          <p className="mb-4">
            Ao navegar neste site, você concorda com nossos termos. Uso indevido pode acarretar em restrições. Dúvidas? Contate <a href="mailto:comercial@lsgdigital.com.br" className="underline">comercial@lsgdigital.com.br</a>.
          </p>
        )
      }
    };

    const { title, body } = contentMap[modalContent] || {};

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
        <div className="bg-zinc-900 text-white p-3 rounded-lg max-w-md w-full relative">
          <button onClick={closeModal} className="absolute top-3 right-4 text-white text-xl">&times;</button>
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {body}
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-black text-white py-1 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-sm space-y-6">        
        <div className="flex gap-3">
          <button onClick={() => openModal("sobre")} className="text-white/70 hover:text-white transition">Sobre</button>
          <button onClick={() => openModal("privacidade")} className="text-white/70 hover:text-white transition">Privacidade</button>
          <button onClick={() => openModal("termos")} className="text-white/70 hover:text-white transition">Termos</button>
        </div>

        <p className="text-white/40 text-xs text-center">
          &copy; {new Date().getFullYear()} LSG • Todos os direitos reservados.
        </p>
      </div>

      {modalContent && renderModal()}
    </footer>
  );
};

export default Footer;
