const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'bs-yellow': {
          DEFAULT: '#FFD369',
          '400': '#FACC5F',
          '500': '#F4C655',
          '600': '#EFBF4B',
          '700': '#EAB841',
          '800': '#E4B237',
          '900': '#DFAB2D',
        },
        'bs-dark-black': '#222831',
        'bs-light-black': '#393E46',
        'bs-light-grey': '#EEEEEE',
        ...colors
      }
    }
  }
}
