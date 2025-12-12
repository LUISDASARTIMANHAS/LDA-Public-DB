import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos (necessário para GitHub Pages)
  base: "./",

  // Define a pasta de saída da build
  build: {
    outDir: "docs",
    emptyOutDir: true
  }
});
