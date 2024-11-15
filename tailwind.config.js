/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed"],
        playfair: ["Playfair Display"],
        marker: ["Permanent Marker"],
      },
      colors: {
        primary: "rgb(34 211 238)",
        secondary: "rgb(255, 175, 68)",
        tertiary: "rgb(100 116 139)",
      },
    },
  },
  plugins: [require("rippleui")],
};
