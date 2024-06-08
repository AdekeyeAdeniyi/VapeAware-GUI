/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        textSlideIn: "textSlideIn .5s linear forwards",
        textSlideOut: "textSlideOut .5s linear forwards",
      },
      keyframes: {
        textSlideIn: {
          "100%": { transform: "translateX(0%)" },
        },

        textSlideOut: {
          "0%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
