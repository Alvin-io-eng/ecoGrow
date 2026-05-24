/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2d4a22',
        lime: '#e2f197',
        neutral: '#f4f3ef',
      },
      fontFamily: {
        editorial: ['Oswald', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
