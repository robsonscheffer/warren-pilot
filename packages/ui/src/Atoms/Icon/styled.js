import styled from 'styled-components'
import { color } from 'styled-system'

const IconStyled = styled.i`
  display: inline-flex;
  justify-content: center;
`

const CustomTextIcon = styled(IconStyled)`
  color: ${(props) => props.theme.colors.textBodyInverse};
  ${color}
  font-style: normal;
  font-weight: bold;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  align-items: center;
`

export { IconStyled, CustomTextIcon }
