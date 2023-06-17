export const presetTailwindCss = () => ({
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3b5998',
          200: '#4c69ba',
          300: '#5d7eb7',
          400: '#6e93c4',
          500: '#80a8d1'
        },
        secondary: {
          100: '#c5c9e1',
          200: '#d0d4e6',
          300: '#dadef0',
          400: '#e5e7f4',
          500: '#eff1f7'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        poppins: ['var(--font-poppins)']
      }
    },
    plugins: []
  }
})
