/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'almostWhite': 'hsl(0, 0%, 98%)',
        'mediumGray': 'hsl(0, 0%, 41%)',
        'Almostblack': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        sans: ['Epilogue'],
      },
      fontSize: {
        base: '18px',
      },
      fontWeight: {
        'normal': 500,
        'bold': 700,

      },
      screens: {
        'sm': { 'max': '320px' },    // Mobile screen size
        'md': { 'max': '768px' },    // Tablet screen size (if needed)
        'lg': { 'max': '1024px' },   // Desktop screen size
        'xl': { 'max': '1440px' },   // Large desktop screen size
      },
    },
  },
  plugins: [],
}
