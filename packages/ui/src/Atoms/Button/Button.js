import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'

import ButtonStyled from './styled'

const Button = ({ children, size, ...props }) => {
  const { buttons } = useContext(ThemeContext)
  const sizes = buttons.sizes[size] || {}
  return (
    <ButtonStyled {...sizes} {...props}>
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  rounded: true,
  disabled: false,
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Button
