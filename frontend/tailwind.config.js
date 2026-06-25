/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        vibranium: {
          900: '#050505', 
          800: '#0B0C10', 
        },
        kinetic: {
          500: '#8A2BE2', 
          400: '#9D4EDD', 
        },
        hologram: {
          500: '#00F0FF', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'], 
      }
    },
  },
  plugins: [],
}