/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#FBF1EF",
          100: "#F2DCD8",
          200: "#E1B3AC",
          300: "#C97F73",
          400: "#A8493F",
          500: "#7A2E2E",
          600: "#642626",
          700: "#4D1D1D",
          800: "#391515",
          900: "#260E0E",
        },
        cream: {
          50: "#FFFEFC",
          100: "#F7F1E8",
          200: "#EFE5D3",
          300: "#E4D5B8",
        },
        gold: {
          400: "#D9B64E",
          500: "#C9A227",
          600: "#A6831C",
        },
        deep: {
          500: "#1F3B33",
          600: "#15291F",
          700: "#0D1C16",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "noksha-dots":
          "radial-gradient(circle, rgba(201,162,39,0.35) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
