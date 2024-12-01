
# Projeto LSG Digital
![mokup-2](https://github.com/user-attachments/assets/88fa0b47-df03-4fc8-9c01-14ae1fb06a86)

**Descrição:**  
Este projeto é um site para a agência **LSG Digital**, que oferece serviços de marketing digital, design, e automação. O site possui uma interface moderna e responsiva, destacando serviços oferecidos pela agência, incluindo gestão de CRM, criação de landing pages, e campanhas personalizadas. Além disso, há um formulário de contato para facilitar a interação com clientes e leads.
![mokup-1](https://github.com/user-attachments/assets/b6c52114-a2af-4cd3-a24a-5ac4a28b5b47)


## Funcionalidades

- **Página Inicial:** Com informações sobre os serviços da agência.
- **Serviços:** Exibe as principais soluções que a agência oferece com uma descrição detalhada.
- **Formulário de Contato:** Permite que os visitantes entrem em contato diretamente com a equipe através de um formulário interativo.
- **Consentimento de Cookies:** Banner de consentimento de cookies para conformidade com as leis de privacidade (ex: GDPR).
- **Design Responsivo:** O site é totalmente responsivo, ou seja, ele se adapta automaticamente a diferentes tamanhos de tela (desktop, tablet, celular).
![mokup3](https://github.com/user-attachments/assets/7ea12603-2e04-4bc2-ac76-1276a74454b4)

## Tecnologias Utilizadas

- **React.js:** Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS:** Framework CSS para estilização rápida e eficiente.
- **Framer Motion:** Biblioteca para animações e transições suaves.
- **Lucide Icons:** Biblioteca de ícones para a interface.
- **React Router:** Para navegação entre as páginas do site.
- **FormSubmit:** Para gerenciamento do formulário de contato e envio de e-mails.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/lsg-digital.git
```

### 2. Navegar até a pasta do projeto

```bash
cd lsg-digital
```

### 3. Instalar as dependências

Certifique-se de ter o **Node.js** instalado. Caso não tenha, você pode baixá-lo [aqui](https://nodejs.org/).

Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

### 4. Rodar o servidor de desenvolvimento

Após a instalação das dependências, você pode rodar o projeto localmente com o comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento, e o site estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do diretório é a seguinte:

```
lsg-digital/
│
├── public/                   # Arquivos estáticos (imagens, favicon, etc)
│   ├── img/                  # Imagens usadas no site
│   └── index.html            # Arquivo HTML base
│
├── src/                      # Código fonte do projeto
│   ├── components/           # Componentes reutilizáveis
│   │   ├── CookieConsent.js  # Componente de consentimento de cookies
│   │   ├── Footer.js         # Componente de rodapé
│   │   ├── ServicesSection.js# Seção de serviços
│   │   └── FormularioDeContato.js # Formulário de contato
│   │
│   ├── App.js                # Componente principal
│   └── index.js              # Ponto de entrada do aplicativo
│
├── tailwind.config.js        # Configurações do Tailwind CSS
├── postcss.config.js         # Configurações do PostCSS
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Este arquivo
```

## Personalizações

- **Cores e fontes:** A paleta de cores e fontes pode ser personalizada facilmente no arquivo `tailwind.config.js`.
- **Imagens:** Substitua as imagens da pasta `public/img/` para personalizar o conteúdo visual do site.
- **Texto e conteúdo:** Edite as seções de texto nos arquivos JSX dentro de `src/components/` para atualizar as descrições de serviços ou qualquer outra informação.

## Contribuindo

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Faça push para a branch: `git push origin minha-feature`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### Descrição do Projeto:

Este projeto é uma plataforma web para a **LSG Digital**, uma agência especializada em marketing digital e soluções para empresas. A agência oferece diversos serviços, como criação de funis de vendas, campanhas personalizadas, criação de landing pages, implementação de chatbots e mentoria em postagem.

O site é projetado para ser simples, direto e eficiente, com um design responsivo que garante uma boa experiência tanto em desktop quanto em dispositivos móveis. A interface de usuário foi construída utilizando o **React** e estilizada com o **Tailwind CSS**, permitindo um design moderno e flexível.

A seção de **serviços** descreve as soluções oferecidas pela agência, enquanto a **seção de contato** permite que visitantes possam facilmente entrar em contato com a equipe através de um formulário simples, com integração de envio para o **FormSubmit**. Além disso, há um **banner de consentimento de cookies** para garantir conformidade com a legislação de privacidade.

O projeto também é preparado para a adição de novas funcionalidades, com uma estrutura de código limpa e organizada que facilita futuras manutenções e expansões.

---

Esse `README.md` proporciona um panorama completo do projeto, incluindo como rodá-lo, as tecnologias utilizadas e instruções para personalizar o projeto.
