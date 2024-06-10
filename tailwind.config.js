/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn .5s linear forwards",
        slideIn: "slideIn .5s linear forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-200%)",
            opacity: 0,
          },

          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },

        fadeIn: {
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
