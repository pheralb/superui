/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/superui/**/*.{js,ts,jsx,tsx}",
    "../node_modules/superui/dist/index.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
