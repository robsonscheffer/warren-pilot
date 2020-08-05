import styled from 'styled-components'
import { color, space, layout, grid } from 'styled-system'

const NavWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  ${space}
  ${color}
  ${layout}
`
const WrapperButtons = styled.div`
  width: fit-content;
  display: grid;
  justify-items: center;
  ${space}
  form {
    display: grid;
    justify-items: center;
    ${grid}
    grid-auto-flow: column;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`
WrapperButtons.defaultProps = {
  gridGap: [1],
  px: [1],
}

const WrapperFields = styled(WrapperButtons)`
  width: 100%;
  form {
    width: 100%;
    grid-template-columns: 80% 20%;
  }
`
WrapperFields.defaultProps = {
  gridGap: [0],
  px: [0],
}

export { NavWrapper, WrapperButtons, WrapperFields }
