import React, { memo } from 'react'
import PropTypes from 'prop-types'
import DynamicComponent from '../../DynamicComponent'

const Text = ({ children, ...props }) => (
  <DynamicComponent
    color="textBody"
    fontWeight="400"
    fontSmooth="antialiased"
    fontSize="normal"
    lineHeight="normal"
    {...props}
  >
    {children}
  </DynamicComponent>
)

Text.defaultProps = {
  tag: 'p',
}

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default memo(Text)
