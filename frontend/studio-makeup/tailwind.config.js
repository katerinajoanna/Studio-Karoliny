/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#454016',
        textSecondary: '#3E3535',
        generalText: '#6E5325',
        hoverText: '#E8B24D',
      },
      fontFamily: {
        cherish: ["Cherish", "cursive"],
        serifTC: ["'Noto Serif TC'", "serif"],
        malayalam: ["'Noto Sans Malayalam'", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to top, #E8B24D 0%,#454016 100%)',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
}
