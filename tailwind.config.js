/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'abuget': ['Abuget', 'sans-serif'],
        'DM': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
}

