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
          400: '#9D4EDD', // Lighter purple
          500: '#8A2BE2', // Core Neon Purple
          600: '#7B2CBF', // Deep Purple (Used in your light mode)
          700: '#5A189A', // Darkest Purple
        },
        hologram: {
          400: '#48CAE4', 
          500: '#00F0FF', // Core Cyan
          600: '#00B4D8', 
          700: '#0077B6', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'], 
      },
      animation: {
        shine: "shine 0.8s ease-in-out",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}