/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Website/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-itch-color': '#fa5c5c'
      },
      animation: {
        pulse_on_start: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2;',
      }
    },
  },
  plugins: [],
}

