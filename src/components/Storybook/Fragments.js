import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`

export const Column = styled.div`
  box-sizing: border-box;
`

export const Boxed = styled.div`
  box-sizing: border-box;
  border: solid thin #ccc;
  padding: 5px;
  text-align: center;
`
