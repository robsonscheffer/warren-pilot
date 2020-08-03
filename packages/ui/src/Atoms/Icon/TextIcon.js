import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { CustomTextIcon } from './styled'

const TextIcon = ({ variant, width, height, fill, children, ...props }) => {
  const theme = useContext(ThemeContext)
  return (
    <CustomTextIcon {...props} bg={fill || theme.colors[variant]}>
      {children}
    </CustomTextIcon>
  )
}

TextIcon.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  fill: PropTypes.string,
  stroke: PropTypes.string,
}

TextIcon.defaultProps = {
  width: 32,
  height: 32,
  variant: 'primary',
  fill: '',
  stroke: null,
}

export default TextIcon
