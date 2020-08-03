import React from 'react'
import PropTypes from 'prop-types'

import BoxWrapper from './styled'

const Box = ({ children, ...props }) => (
  <BoxWrapper px={[3]} py={[5]} {...props}>
    {children}
  </BoxWrapper>
)

export default Box
