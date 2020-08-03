import styled from 'styled-components'
import { style } from 'styled-system'
import { space, fontSize, color } from 'styled-system'

const FormControll = styled.div``

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
    ${color}
    font-family:inherit;
  }
`

FormField.defaultProps = {
  px: [2],
  py: [1],
  fontSize: 'large',
  color: 'textBody',
}

export { FormField }
