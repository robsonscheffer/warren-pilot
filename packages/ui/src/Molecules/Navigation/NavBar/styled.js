import styled from 'styled-components'
import { space } from 'styled-system'

const NavWrapper = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${space}
`
NavWrapper.defaultProps = {
  p: [1],
}

const Action = styled.div`
  width: 20%;
  max-width: 24px;
`

const Area = styled.div`
  width: 80%;
  text-align: center;
`

export { NavWrapper, Action, Area }
