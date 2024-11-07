import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33333%)" },
        },
        fadeIn: {
          "0%, 100%": { transform: "opacity(1)" },
          "50%": { transform: "opacity(0)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        fadeIn: "fadeIn 20s linear infinite",
      },
      colors: {
        "paradise-blue": "#00B4DB",
        "paradise-dark": "#0083B0",
        sand: "#f4f4f4",
        coral: "#3498db",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
