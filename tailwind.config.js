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
    extend: {}, // Extensões personalizadas podem ser adicionadas aqui
  },
  // Habilita o modo escuro através da classe "dark"
  darkMode: "class",
  // Plugins utilizados no Tailwind CSS
  plugins: [nextui()],
});

export default config;
