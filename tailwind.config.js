/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  safelist: [
    {
      pattern: /bg-(pink|orange|blue|green|yellow|red)-[100|200|400]/, // Matches your dynamic colors
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

