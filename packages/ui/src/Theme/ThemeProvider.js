import React, { Fragment } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';

const ThemeProvider = ({ children, ...props }) => (
  <StyledThemeProvider {...props}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
