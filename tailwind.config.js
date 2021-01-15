module.exports = {
  purge: ['./src/**/*.tsx', './.storybook/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      container: {
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        sans: ['Muli', 'sans-serif', '-apple-system'],
        raleway: ['Raleway'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        red: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#F88081', //modified
          500: '#FD6164', //modified
          600: '#FF0000', //modified
          700: '#CF0101', //modified
          800: '#9C0000', //modified
          900: '#742a2a',
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210',
        },
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#39C779', //modified
          500: '#27ba6a', //modified
          600: '#0e960e',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        indigo: {
          100: '#ebf4ff',
          200: '#c3dafe',
          300: '#a3bffa',
          400: '#7f9cf5',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        primary: {
          200: '#E0F2FC',
          300: '#44beff',
          400: '#22a7f0',
          500: '#229bdd',
          600: '#32a6de',
          title: '#2C4763',
        },
        onPrimary: 'white',
        // surface: {
        //   500: '#FFFFFF',
        // },
        background: {
          500: '#fff',
        },
        onBackground: '#444444',
        red: {
          400: '#F88081',
          500: '#FD6164',
          600: '#FF0000',
          700: '#CF0101',
          800: '#9C0000',
        },
        facebook: '#4267B5',
      },
      variants: {
        gridTemplateColumns: ['responsive', 'hover', 'focus'],
      },
    },
  },
  variants: {},
  plugins: [],
}
