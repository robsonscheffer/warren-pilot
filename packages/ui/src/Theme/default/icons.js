import colors from './colors'

const hover = {
  '&:hover': {
    transition: 'opacity .5s',
    opacity: 0.7,
  },
}

const primary = {
  path: {
    transition: 'opacity .5s',
    fill: colors.snow,
  },
  fill: colors.secondary,
  transition: 'opacity .5s',
  ...hover,
}

const secondary = {
  path: {
    fill: colors.secondary,
  },
  fill: colors.snow,
  transition: 'opacity .5s',
  ...hover,
}

export default {
  primary,
  primaryInverse: secondary,
  secondary,
  secondaryInverse: primary,
}
