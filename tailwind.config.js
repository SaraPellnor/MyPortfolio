/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rollText: "rollText 10s linear infinite",
        spinEazy: "spin ease-in-out", // Anpassa tidsvärdet och timing-funktionen efter behov
      },
      keyframes: {
        rollText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        // fontFamily: {
        //   "josefin-sans": ['"Josefin Sans"', "sans-serif"],
        // }
      },
    },
  },
  plugins: [],
};
