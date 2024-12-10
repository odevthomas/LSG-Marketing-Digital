// tailwind.config.mjs
import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = withMT({
  // Arquivos onde o Tailwind CSS irá procurar classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Configurações do tema
  theme: {
    extend: {
      colors: {
        'lado-oeste': {
          '50': '#fffbec',
          '100': '#fff6d3',
          '200': '#ffeaa5',
          '300': '#ffd86d',
          '400': '#ffbb32',
          '500': '#ffa40a',
          '600': '#ff8c00',
          '700': '#cc6702',
          '800': '#a14f0b',
          '900': '#82420c',
          '950': '#462004',
        },
        // Adicionando mais cores personalizadas
        'primary': '#ff8c00', // Cor principal
        'secondary': '#ffa434', // Cor secundária
        'dark': '#1f1f1f', // Cor escura
        'light': '#ffffff', // Cor clara
        'gray-light': '#f5f5f5', // Cinza claro
        'gray-dark': '#4a4a4a', // Cinza escuro
      },
    },
  },
  // Habilita o modo escuro através da classe "dark"
  darkMode: "class",
  // Plugins utilizados no Tailwind CSS
  plugins: [nextui()],
});

export default config;