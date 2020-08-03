import React from 'react'
import PropTypes from 'prop-types'
import DynamicComponent from '../../DynamicComponent'

const Footnote = ({ children, ...props }) => (
  <DynamicComponent
    color="textBody"
    fontWeight="normal"
    fontSize="small"
    lineHeight="small"
    {...props}
  >
    {children}
  </DynamicComponent>
)

Footnote.defaultProps = {
  tag: 'p',
}

Footnote.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Footnote
