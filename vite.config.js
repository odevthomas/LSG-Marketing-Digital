import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
  build: {
    outDir: 'dist', // Diretório de saída para build
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar importações
    },
  },
});
