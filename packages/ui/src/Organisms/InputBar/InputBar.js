import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../Atoms'

import FormBuilder from '../../Molecules/FormBuilder'

import { NavWrapper } from './styled'

const InputBar = ({ children, fields, onSubmit, ...props }) => {
  return (
    <NavWrapper {...props}>
      <FormBuilder onSubmit={onSubmit} fields={fields}>
        {children}
      </FormBuilder>
    </NavWrapper>
  )
}

InputBar.propTypes = {
  fields: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
}

export default InputBar
