/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Inter', 'sans-serif'],
        "mono": ['Source Code Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}

