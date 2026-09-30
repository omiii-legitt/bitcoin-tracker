/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { primary:"#0a0e1a", secondary:"#0f1629", card:"#111827" },
      }
    }
  },
  plugins: [],
};
