import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.join(', ')};
  }
`
