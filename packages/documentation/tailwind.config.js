const { generateSafelist, generateColors } = require('react-breeze');

const safelist = generateSafelist();
const colors = generateColors();

module.exports = {
  content: ['./src/**/*.{html,js,tsx}', './docs/**/*.mdx', '../react-breeze/**/*.tsx'],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
  safelist,
};
