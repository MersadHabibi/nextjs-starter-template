import tailwindReactAria from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        iranYekan: ["var(--font-iranYekan)", "IRANYekanX", "sans-serif"],
      },
    },
  },
  plugins: [
    tailwindReactAria({
      prefix: "rac",
    }),
  ],
};
