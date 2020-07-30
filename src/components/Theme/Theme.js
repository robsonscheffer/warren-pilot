import React from 'react'
import { ThemeProvider } from 'styled-components'

import themeDefault from './ThemeDefault'

const Theme = ({ children }) => (
  <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>
)

export default Theme
