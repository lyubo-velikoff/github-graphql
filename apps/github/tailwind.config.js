const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  purge: [
    './apps/github/src/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {
      colors: {
        'l-grey': '#f9f9f9',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
    divideWidth: true,
  },
}
