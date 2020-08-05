// theme.js
import buttons from './buttons'
import colors from './colors'
// import icons from './icons'
import breakpoints from './breakpoints'

export default {
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSizes: {
    small: '0.75rem',
    normal: '1.125rem',
    medium: '1.5rem',
    large: '1.88rem',
  },
  lineHeights: {
    small: '0.75rem',
    normal: '1.125rem',
    medium: '2rem',
    large: '2rem',
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64], // multiples of eight
  breakpoints,
  buttons,
  colors,
  // icons,
}
