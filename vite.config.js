import { resolve } from 'node:path'
import { viteFastify } from '@fastify/vite/plugin'
import tailwindcss from '@tailwindcss/vite'

export default { 
  root: resolve(import.meta.dirname, 'src/client'), 
  plugins: [
    viteFastify(),
    tailwindcss(),
  ],
  build: {
    emptyOutDir: true,
    outDir: '../dist/client',
  }
}