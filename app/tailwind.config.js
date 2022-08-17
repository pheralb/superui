/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/demo/**/*.{js,ts,jsx,tsx}",
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
