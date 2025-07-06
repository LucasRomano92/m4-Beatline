/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: { // aths-special
          50: "#fbf9ef",
          100: "#f0edcc",
          200: "#e4dfa3",
          300: "#d6cb73",
          400: "#ccb853",
          500: "#c2a03e",
          600: "#ab8234",
          700: "#8f632e",
          800: "#75502b",
          900: "#614226",
          950: "#372211",
        },
        secondary: { // daintree
          50: "#eafffd",
          100: "#cbfffb",
          200: "#9dfffa",
          300: "#59fffa",
          400: "#0ffaff",
          500: "#00dce7",
          600: "#00afc2",
          700: "#028b9c",
          800: "#0c6f7e",
          900: "#0f5a6a",
          950: "#02343f",
        },
       
      },
    },
  },
  plugins: [],
};
