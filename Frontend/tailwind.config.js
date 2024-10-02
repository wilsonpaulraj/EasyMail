/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['lexend', 'sans-serif'],
        monsterrat: ['monsterrat, sans-serif']
      },
      colors: {
        primary: '#E55938',    // orange (primary)
        secondary: '#638B98',  // blue-gray
        accent: '#5B7C81',     // teal
        highlight: '#564D4E',  // dark gray
        background: '#F5F5F5', // light gray
      },
    },
  },
  plugins: [],
};
