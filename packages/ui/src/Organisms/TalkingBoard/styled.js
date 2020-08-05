import styled from 'styled-components'
import { style } from 'styled-system'

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.maxHeight || 'auto'};
  overflow: auto;
`

export { Wrapper }
