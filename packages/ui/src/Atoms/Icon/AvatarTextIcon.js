import React from 'react'
import TextIcon from './TextIcon'

const AvatarTextIcon = ({ children, ...props }) => (
  <TextIcon {...props}>{children}</TextIcon>
)

export default AvatarTextIcon
