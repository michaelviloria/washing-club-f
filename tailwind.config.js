/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "menu-blue-cyan": "#1BE7FF",
        "menu-blue-dark": "#38618C",
        "menu-purple": "#A79AB2",
        "menu-red": "#9C0D38",
        "menu-orange": "#F06449",
      },
    },
  },
  plugins: [],
};
