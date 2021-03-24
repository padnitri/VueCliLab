module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      pink: colors.pink},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
