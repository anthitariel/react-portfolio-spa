/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2e2b2b",
        secondary: "#3d3d3c",
        accent: "#3C9DD0",
      },
    },
  },
  plugins: [],
};
