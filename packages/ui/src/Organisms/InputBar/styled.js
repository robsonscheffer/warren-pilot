import styled from 'styled-components'
import { color, space, layout } from 'styled-system'

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0 auto;
  form {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 80% 20%;
  }
  ${space}
  ${color}
  ${layout}
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
  paddingLeft: [3],
  paddingRigth: [3],
  paddingTop: [5],
  paddingBottom: [5],
}

export { NavWrapper, Action, Area }
