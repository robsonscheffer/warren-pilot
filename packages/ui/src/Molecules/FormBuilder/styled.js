import styled from 'styled-components'

import { color } from 'styled-system'

const Wrapper = styled.div`
  ${color}
`

Wrapper.defaultProps = {
  bg: 'lightGray',
}

export { Wrapper }
