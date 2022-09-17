/* eslint-disable */
module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',
    configurePostCss(postCssOptions) {
      postCssOptions.plugins.push(require('tailwindcss'));
      postCssOptions.plugins.push(require('autoprefixer'));
      return postCssOptions;
    },
  };
};
