/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Se você tiver elementos diretamente no HTML
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#81ff94', // Cor principal do seu projeto
        'secondary': '#1DA65D', // Cor de destaque
        'black': '#000000', // Preto puro
        'white': '#ffffff', // Branco puro
        'gray-light': '#f5f5f5', // Cinza claro (para fundo)
        'gray-dark': '#333333', // Cinza escuro (para textos)
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'], // Fonte padrão
      },
      spacing: {
        '128': '32rem', // Adiciona um novo valor de espaçamento (ex: 32rem)
        '144': '36rem', // Outro valor de espaçamento
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        'xs': '475px', // Para telas pequenas
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para um estilo melhor em formulários
    require('@tailwindcss/typography'), // Para textos bonitos e fáceis de ler
  ],
}
