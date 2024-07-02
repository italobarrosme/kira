export const presetTailwindCss = () => ({
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F29F05',
          secondary: '#D97904',
          accent: '#FF6702',
          dark: '#262523',
          light: '#f9f9f9'
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
