/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        skyblue: '#73cde5',
        yaleblue: '#174790',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      borderWidth: {
        heroborder: 'var(--hero-border-width)',
      },
      spacing: {
        heroborder: 'var(--hero-border-width)',
      },
    },
  },
  plugins: [],
};
