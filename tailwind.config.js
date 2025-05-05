/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#2b6cb0",
        accent: '#FFA500',
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        'kudsa-red': '#ff0000',
        'kudsa-green': '#006400',
        'kudsa-gold': '#ffa500',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default font
        montserrat: ['Montserrat', 'sans-serif'], // Custom entry
      },
      animation: {
        shine: 'shine 1.5s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100px)' },
          '60%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      
    },
  },


  
  plugins: [],
}