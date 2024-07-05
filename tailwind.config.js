/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: "#42297A",
        },
        secondary: {
          normal: "#0AE69C",
          olive: "#7B7B7B",
        },
      },
    },
  },
  plugins: [],
};
