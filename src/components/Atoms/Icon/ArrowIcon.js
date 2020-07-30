import React from 'react'
import Icon from './Icon'

const ArrowIcon = ({ fill, ...props }) => (
  <Icon {...props} viewBox="0 0 24 24">
    <path
      fill={fill}
      stroke="none"
      pid="0"
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
      fillRule="evenodd"
    />
  </Icon>
)

export default ArrowIcon
