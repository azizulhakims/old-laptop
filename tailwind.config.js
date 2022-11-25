/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "aqua", "light"],
  },
  plugins: [require("daisyui")],
}
