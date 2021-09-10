const { merge } = require('lodash')
const defaultTailwindConfig = require('@openware/react-opendax/tailwind.config')

module.exports = merge(
  defaultTailwindConfig,
  {
    mode: 'classic',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "primary-cta-color-main": "rgba(79,70,229,var(--tw-bg-opacity))",
          "primary-cta-color-hover": "rgba(67,56,202,var(--tw-bg-opacity))",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  },
)
