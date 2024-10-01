/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',    // coral red
        secondary: '#FFCCBC',  // light orange
        accent: '#FF8A65',     // peach
        highlight: '#FF7043',  // deep orange
        background: '#FFE0B2', // light orange background
        darkGray: '#333333',
        lightGray: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
