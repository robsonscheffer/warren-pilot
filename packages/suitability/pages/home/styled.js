import styled from 'styled-components'

const Container = styled.section`
  max-width: 912px;
  margin: 0 auto;
  padding: 0 16px;
`
const TalkingBoardSection = styled(Container)`
  padding-top: 50px;
  padding-bottom: 115px;
`

const FooterBar = styled.footer`
  position: fixed;
  box-sizing: border-box;
  padding: 40px 0px;
  width: 100%;
  height: 115px;
  bottom: 0px;
  transition: opacity ease-in-out 0.4s;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: none;
  ${(props) =>
    props.show &&
    `
    display: block;
  `}
`

export { Container, FooterBar, TalkingBoardSection }
