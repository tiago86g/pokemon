module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      height: ['hover', 'focus', 'group-hover'],
      opacity: ['hover', 'focus', 'group-hover'],
      zIndex: ['hover', 'active', 'group-hover'],
      width: ['hover', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
