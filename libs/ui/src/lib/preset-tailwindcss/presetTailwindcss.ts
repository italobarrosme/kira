export const presetTailwindCss = () => ({
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FD7800',
          200: '#FF8C00',
          300: '#FFA000',
          400: '#FFB400',
          500: '#FFC800'
        },
        secondary: {
          100: '#000000',
          200: '#C1C1C',
          300: '#E3E3E3',
          400: '#F2F2F2',
          500: '#FFFFFF'
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
