/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      'hero-pattern': "url('./src/assets/bg.jpg')"
    },
  },
  plugins: [],
}
