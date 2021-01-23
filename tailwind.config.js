module.exports = {
  purge: ['*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '1xl': '4.4rem',
        '2xl': '3.3rem',
        '3xl': '2.5rem',
        '4xl': '1.9rem',
        '5xl': '1.5rem',
        '6xl': '1.4rem',
        '7xl': '1.0rem'
      },
      colors: {
        blue: '#232946',
        pink: '#EEBBC3',
        violet: '#B8C1EC',
        white: '#FFFFFE'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
