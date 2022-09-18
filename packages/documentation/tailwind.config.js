const { generateSafelist } = require('react-breeze');

const safelist = generateSafelist(['blue', 'red']);

module.exports = {
  content: ['./src/**/*.{html,js,tsx}', './docs/**/*.mdx', '../react-breeze/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        red: {
          inverted: '#ffffff',
        },
        blue: {
          inverted: '#ffffff',
        },
      },
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
