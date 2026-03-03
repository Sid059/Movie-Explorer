import('tailwindcss').Config
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#DB0000',
        'netflix-dark-red': '#831010',
        'netflix-gray': '#564D4D',
      },
      fontFamily: {
        'netflix': ['NetflixSans', 'sans-serif'],
        'netflix-light': ['NetflixSans-Light', 'sans-serif'],
        'netflix-medium': ['NetflixSans-Medium', 'sans-serif'],
        'netflix-bold': ['NetflixSans-Bold', 'sans-serif'],
      },
      fontSize: {
        'logo': '1.5rem',
        'nav': '1rem',
        'nav-mobile': '0.875rem',
      }
    },
  },
  plugins: [],
}