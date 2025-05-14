module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    require('postcss-custom-properties')({
      preserve: false,      // replace var(...) with static values
    }),
  ],
}
