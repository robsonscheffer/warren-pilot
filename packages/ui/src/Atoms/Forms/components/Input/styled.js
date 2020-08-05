import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const FormControll = styled.div`
  width: 100%;
  ${space}
`

FormControll.defaultProps = {
  mb: [1],
}

const FormField = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: 0;
  box-sizing: border-box;
  ${space}
  ${fontSize}
  ${color}

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
    font-family:inherit;
  }
`

FormField.defaultProps = {
  px: [2],
  py: [1],
  fontSize: 'large',
  color: 'textBody',
}

export { FormField, FormControll }
