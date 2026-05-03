/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranYekan: ["var(--font-iranYekan)", "IRANYekanX", "sans-serif"],
      },
    },
  },
  plugins: [],
};
