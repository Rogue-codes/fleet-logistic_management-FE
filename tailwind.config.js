/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1: "#6A559B",
          2: "#FCE4D1",
          100: "#FFE5D5",
          200: "#FEBF96",
          300: "#FEAA73",
          400: "#FE9450",
          500: "#D46A26",
          600: "#F2761B",
        },
        black: {
          1: "#4B4B4D",
        },
        lemon: {
          1: "#A7C908",
        },
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      },
      animation: {
        slideUp: "slideUp .5s ease-in-out ",
        fade: "fade 1.5s ease ",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: 0.5 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        fade: {
          "0%": { opacity: 0.4 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
