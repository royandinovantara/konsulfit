/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F2038",
        cream: "#F1F7FD",
        pine: {
          50: "#EAF4FC",
          100: "#D2E7F9",
          200: "#A6CEF2",
          300: "#78B2E9",
          400: "#4C93DC",
          500: "#2F76C6",
          600: "#1F5AA0",
          700: "#17457F",
          800: "#10335F",
          900: "#0B2246",
        },
        amber: {
          400: "#F0B84B",
          500: "#E8A33D",
          600: "#C6832A",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
