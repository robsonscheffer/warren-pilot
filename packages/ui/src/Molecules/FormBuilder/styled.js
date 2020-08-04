import styled from 'styled-components'

import { color, space } from 'styled-system'

const Wrapper = styled.div`
  ${color}
  ${space}
`

Wrapper.defaultProps = {
  bg: 'lightGray',
  px: [2],
}

export { Wrapper }
