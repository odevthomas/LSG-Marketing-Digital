// tailwind.config.mjs
import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
        'primary': '#ff8c00',
        'secondary': '#ffa434',
        'dark': '#1f1f1f',
        'light': '#ffffff',
        'gray-light': '#f5f5f5',
        'gray-dark': '#4a4a4a',
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'noto-serif-kr': ['Noto Serif KR', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ultra': ['Ultra', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});

export default config;