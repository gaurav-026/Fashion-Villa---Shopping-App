/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#2874f0",
        darkblue: "#0046b9",
        cardBackground: "#F8F8F8",
        hovercardBackground: "#F0F0F0",
        white:"#ffffff",
        grey: "#666666",
        green: "#0ab06b",
        red: "#ff0000"
      }
    },
  },
  plugins: [],
};
