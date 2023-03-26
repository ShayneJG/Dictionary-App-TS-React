/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        serif: ["Lora"],
        mono: ["Inconsolata"],
        loraItalic: ["Lora-italic"],
      },
    },
  },
  plugins: [],
};
