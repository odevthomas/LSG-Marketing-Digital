import React from "react";
import "./DeveloperInfo.css"; // Importando o CSS

const DeveloperInfo = () => {
  return (
    <div className="developer-info">
      <h1>Sobre o Desenvolvedor</h1>
      <p>
        Este site foi desenvolvido por <strong>Thomas Eduardo R Nascimento</strong>, um desenvolvedor frontend apaixonado por criar experiências digitais.
      </p>
      <p>
        Você pode entrar em contato pelo e-mail: <a href="mailto:developer.thomas@outlook.com">developer.thomas@outlook.com</a>
      </p>
      <p>Siga-me nas redes sociais:</p>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/devthm/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/devthmedu" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.instagram.com/_devthm/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
      </ul>
      <p>
        WhatsApp: <a href="https://wa.me/19999042072">19999042072</a>
      </p>
      <p>Localização: São Paulo</p>
    </div>
  );
};

export default DeveloperInfo;