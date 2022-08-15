/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/superui/**/*.{js,ts,jsx,tsx}",
    "../node_modules/superui/dist/index.{js,mjs}",
    "../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter-Regular", "sans-serif"],
      heading: ["Inter-Medium", "sans-serif"],
    },
  },
  plugins: [],
};
