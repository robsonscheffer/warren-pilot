import React from 'react'
import PropTypes from 'prop-types'

import { Form, TextInput, NumberInput } from '../../Atoms/Forms'

import { NavWrapper } from './styled'

const InputBar = ({ children, ...props }) => (
  <NavWrapper {...props}>{children}</NavWrapper>
)

export default InputBar
