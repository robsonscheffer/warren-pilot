import React from 'react'
import PropTypes from 'prop-types'
import DynamicComponent from '../../DynamicComponent'

const HeadingM = ({ children, ...props }) => (
  <DynamicComponent
    fontSize="medium"
    fontWeight="700"
    lineHeight="medium"
    {...props}
  >
    {children}
  </DynamicComponent>
)

HeadingM.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default HeadingM
