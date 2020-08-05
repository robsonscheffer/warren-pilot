import React from 'react'
import ThemeProvider, { ReactUI } from '../src/Theme'
import GlobalStyles from '../src/GlobalStyles'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={ReactUI}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
