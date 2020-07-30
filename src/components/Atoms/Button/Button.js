import React from 'react'
import PropTypes from 'prop-types'

import ButtonStyled from './styled'

const Button = ({ variant, children, ...props }) => {
  return (
    <ButtonStyled {...props} className={variant}>
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
