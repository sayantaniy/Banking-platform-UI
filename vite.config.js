import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        instrument: ['Instrument Sans', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        lexend: ['Lexend', 'sans-serif'],
        playwrite: ['Playwrite US Trad Guides', 'cursive'],
        google: ['Google Sans', 'sans-serif'],
      },
    },
  },
  

  plugins: [
    tailwindcss(),react()],
})
