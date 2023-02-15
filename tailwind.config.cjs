/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Roboto', sans-serif"
      },
      colors: {
        gray: {
          100: '#F8F8FF',
          200: '#EAEAEA',
          700: '#7C7C8A',
          900: '#121214'
        },
        red: {
          500: '#E45858'
        },
        violet: {
          500: "#6246EA"
        }
      }
    },
  },
  plugins: [],
}
