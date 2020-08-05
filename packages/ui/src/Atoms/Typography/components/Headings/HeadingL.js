import React from 'react'
import PropTypes from 'prop-types'
import DynamicComponent from '../../DynamicComponent'

const HeadingL = ({ children, ...props }) => (
  <DynamicComponent
    fontSize="large"
    fontWeight="700"
    lineHeight="large"
    {...props}
  >
    {children}
  </DynamicComponent>
)

HeadingL.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default HeadingL
