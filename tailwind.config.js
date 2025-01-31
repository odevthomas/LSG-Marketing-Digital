// tailwind.config.mjs
import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = withMT({
  // Arquivos onde o Tailwind CSS irá procurar classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Configurações do tema
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'primary-white': '#FFFFFF',
        'gray-subtle': '#F5F5F5'
      },
      fontFamily: {
        'sans': ['Satoshi', 'ui-sans-serif', 'system-ui'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      transitionProperty: {
        'subtle': 'transform, opacity',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slideUp 0.8s forwards',
      }
    },
  },
  // Habilita o modo escuro através da classe "dark"
  darkMode: "class",
  // Plugins utilizados no Tailwind CSS
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#ffa40a', // Cor primária baseada no tema 'lado-oeste'
          },
        },
        dark: {
          colors: {
            primary: '#ff8c00', // Cor primária para o modo escuro
          },
        },
      },
    }),
  ],
});

export default config;