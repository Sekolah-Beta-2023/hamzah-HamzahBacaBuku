/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#445d48',
        secondary: '#001524',
        pinky: '#fde5d4',
        crem: '#D6CC99',
      },
    },
  },
  plugins: [],
}
