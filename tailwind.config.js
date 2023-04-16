/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "ui-system"],
      nunito: ["Nunito Sans", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F48C06",
        "dark-blue": "#2F327D",
        "light-blue": "#65DAFF",
        secondary: "#696984",
      },
    },
  },
  plugins: [],
};
