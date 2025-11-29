/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF10F0',
        'neon-cyan': '#00FFFF',
        'neon-yellow': '#FFFF00',
        'neon-orange': '#FF6B00',
        'neon-purple': '#B026FF',
        'arcade-bg': '#0A0E27',
        'arcade-dark': '#1A1F3A'
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}