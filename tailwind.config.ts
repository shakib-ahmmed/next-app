/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 8s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 6s infinite",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
