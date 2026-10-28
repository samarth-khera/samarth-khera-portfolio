import { existsSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Resolved at build time: drop the real PDF at public/resume.pdf and rebuild/redeploy to enable
    // every Resume action. No runtime request is made, so a missing file never logs a 404.
    __RESUME_AVAILABLE__: JSON.stringify(existsSync('public/resume.pdf')),
  },
})
