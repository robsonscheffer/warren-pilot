import styled from 'styled-components'

const TalkingBoardSection = styled.section`
  padding-top: 50px;
  max-width: 912px;
  margin: 0 auto;
  padding-bottom: 115px;
`

const FooterBar = styled.footer`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 115px;
  bottom: 0px;
  transition: opacity ease-in-out 0.2s;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: none;
  ${(props) =>
    props.show &&
    `
    display: block;
  `}
`

export { TalkingBoardSection, FooterBar }
