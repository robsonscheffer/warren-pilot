import styled from 'styled-components'

const BaseStyle = styled.button`
  background: transparent;
  cursor: pointer;
  min-width: 0;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  height: ${(props) => props.theme.buttonSizes[props.size] || props.size};
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.03125rem;
  white-space: nowrap;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);

  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text.inverse};
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text.body};
  }

  &:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  ${(props) =>
    props.disabled &&
    `
      opacity: 0.7;
      cursor: click;
      &:hover {
        transform: scale(1.05);
      }
  `}

  border-radius: ${(props) => props.rounded && '100px'};
`

export default BaseStyle
