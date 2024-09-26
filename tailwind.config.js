/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed'],
        playfair: ['Playfair Display'],
        marker: ['Permanent Marker']
      }
    },
  },
  plugins: [require("rippleui")],
}

