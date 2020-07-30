import styled from 'styled-components'

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes[props.size] || props.size};

  ${(props) =>
    props.color &&
    `
      color: ${props.color};
    `}

  ${(props) =>
    props.variant &&
    props.variant === 'primary' &&
    `
      color: ${props.theme.colors.text.body};
    `}

  ${(props) =>
    props.variant &&
    props.variant === 'secondary' &&
    `
      color: ${props.theme.colors.text.inverse};
    `}
`

export default Text
