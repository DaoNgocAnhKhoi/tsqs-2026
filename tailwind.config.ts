/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        armyGreen: "#2F4F3E",
        armyRed: "#8B0000",
        armyGold: "#C6A75E",
        ivoryBg: "#FDF6E3",
        ivoryCard: "#FFFCF4",
      },
    },
  },
  plugins: [],
};
