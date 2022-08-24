/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/demo/**/*.{js,ts,jsx,tsx}",
    "../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        slideIn: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear 1s",
        "slide-in": "slideIn 0.15s linear",
        "pop-in": "popIn 0.05s linear",
      },
    },
    fontFamily: {
      sans: ["Inter-Regular", "sans-serif"],
      heading: ["Inter-Medium", "sans-serif"],
    },
  },
  plugins: [],
};
