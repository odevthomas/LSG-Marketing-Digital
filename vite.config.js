import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  logLevel: 'info',  // Ajuste para 'silent' se você quiser desabilitar todos os logs
})
