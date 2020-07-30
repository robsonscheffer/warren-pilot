import React from 'react'
import { Theme } from '../src/components/Theme'
import GlobalStyles from '../src/components/GlobalStyles'

const ThemeDecorator = (storyFn) => (
  <Theme>
    <GlobalStyles />
    {storyFn()}
  </Theme>
)

export default ThemeDecorator
