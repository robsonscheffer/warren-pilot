import styled from 'styled-components'

import {
  color,
  colorStyle,
  fontSize,
  variant,
  space,
  layout,
} from 'styled-system'

const BaseStyle = styled.button`
  background: transparent;
  cursor: pointer;
  min-width: 0;
  width: 100%;
  border: none;
  padding: 0;
  outline: none;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.03125rem;
  white-space: nowrap;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);

  ${color}
  ${space}
  ${fontSize}
  ${colorStyle}
  ${layout}

  ${(props) => props.rounded && 'border-radius: 100px;'}

  &:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  ${(props) =>
    props.disabled &&
    `
      background-color: ${props.theme.colors.darkGray} !important;
      opacity: 0.7;
      cursor: click;
      &:hover {
        transform: scale(1.00);
      }
  `}
`

const Button = styled(BaseStyle)(
  variant({
    scale: 'buttons',
    prop: 'variant',
    variants: {
      primary: {},
      secondary: {},
    },
  })
)

export default Button
