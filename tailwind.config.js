/** @type {import('tailwindcss').Config} */

const extendTheme = {
    "colors": {
        "secondary": "#020420",
        "primary": "#00DC82",
    }
}

module.exports = {
  content: ['./src/components/**/*.{vue,js,ts}', './src/layouts/**/*.{vue,js,ts}', './src/pages/**/*.{vue,js,ts}'],
  theme: {
    extend: extendTheme,
  },
  plugins: [],
}