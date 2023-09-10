/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sidebarFadeIn: {
          "0%": {
            transform: 'translateX(-800px)',
            opacity: '0.0',
          },
          "100%": {
            transform: 'translateX(0px)',
            opacity: '1',
          }
        }
      },
      animation: {
        sidebarFadeIn: "sidebarFadeIn 300ms"
      }
    },
  },
  plugins: [],
}