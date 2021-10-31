/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */

module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',
    // configurePostCss(postcssOptions) {
    //   postcssOptions.plugins.push(
    //     require('postcss-import'),
    //     require('tailwindcss'),
    //     require('postcss-preset-env')({
    //       autoprefixer: {
    //         flexbox: 'no-2009',
    //       },
    //       stage: 4,
    //     }),
    //   );
    //   return postcssOptions;
    // },
  };
};
