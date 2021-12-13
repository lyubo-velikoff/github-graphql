const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  content: [
    './apps/github/src/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
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
