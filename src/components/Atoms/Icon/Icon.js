import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import IconStyled from './styled'

const Icon = ({ variant, width, height, fill, stroke, children, viewBox }) => {
  const theme = useContext(ThemeContext)
  return (
    <IconStyled>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        stroke={stroke}
        fill={theme.colors[variant] || fill}
      >
        {children}
      </svg>
    </IconStyled>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  fill: PropTypes.string,
  stroke: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  width: 32,
  height: 32,
  variant: '',
  fill: '',
  stroke: null,
}

export default Icon
