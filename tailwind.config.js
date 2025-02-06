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
        'gray-subtle': '#F5F5F5',
        'primary': {
          100: '#FFF5E6',
          200: '#FFE0B2',
          300: '#FFCC80',
          400: '#FFB74D',
          500: '#FFA40A',
          600: '#FF8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        'sans': ['Satoshi', 'ui-sans-serif', 'system-ui'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      transitionProperty: {
        'subtle': 'transform, opacity',
        'all-smooth': 'all',
        'transform-opacity': 'transform, opacity',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slideUp 0.8s forwards',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
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
            primary: {
              DEFAULT: '#ffa40a',
              foreground: '#000000',
            },
            background: {
              DEFAULT: '#FFFFFF',
            }
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#ff8c00',
              foreground: '#FFFFFF',
            },
            background: {
              DEFAULT: '#121212',
            }
          },
        },
      },
    }),
  ],
});

export default config;