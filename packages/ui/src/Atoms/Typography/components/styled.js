import styled from 'styled-components'
import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius,
  display,
  textAlign,
  gridColumn,
  system,
} from 'styled-system'

const StyledDynamicComponent = styled.div`
  margin: 0;
  padding: 0;
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${display}
  ${textAlign}
  ${gridColumn}
  ${system({
    textDecoration: true,
  })}
`

export { StyledDynamicComponent }
