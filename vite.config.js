import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta padrão, mas você pode mudar
    open: true, // Abre automaticamente no navegador
  },
  build: {
    outDir: 'dist', // Saída do build
    rollupOptions: {
      // Opções de Rollup (caso necessário)
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Atalho para o diretório src (facilita imports)
    },
  },
});
