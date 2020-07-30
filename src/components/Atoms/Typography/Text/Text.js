import styled from 'styled-components'

const Text = styled.p`
  color: ${(props) => props.theme.colors.text.body};
  font-size: ${(props) => props.theme.fontSizes[props.size] || props.size};
`

export default Text
