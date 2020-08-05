import styled from 'styled-components'

import { color, space } from 'styled-system'

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  border: solid 3x blue;
  ${color}
  ${space}
`

Wrapper.defaultProps = {
  bg: 'lightGray',
  px: [2],
}

export { Wrapper }
