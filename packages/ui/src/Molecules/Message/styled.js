import styled from 'styled-components'
import { space } from 'styled-system'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: top;
`

const WrapperReceived = styled(Wrapper)`
  grid-template-columns: 32px 1fr;
`

const WrapperSent = styled(Wrapper)`
  grid-template-columns: 1fr 32px;
  text-align: right;
`

export { WrapperReceived, WrapperSent }
