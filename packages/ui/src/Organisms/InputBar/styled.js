import styled from 'styled-components'
import { color, space } from 'styled-system'

const NavWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${space}
  ${color}
`
const Action = styled.div`
  width: 20%;
  max-width: 24px;
`

const Area = styled.div`
  width: 80%;
  text-align: center;
`

NavWrapper.defaultProps = {
  bg: 'lightGray',
  paddingLeft: [3],
  paddingRigth: [3],
  paddingTop: [5],
  paddingBottom: [5],
}

export { NavWrapper, Action, Area }
