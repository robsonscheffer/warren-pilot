import React from 'react'
import PropTypes from 'prop-types'

import FormBuilder from '../../Molecules/FormBuilder'

import { NavWrapper, WrapperButtons, WrapperFields } from './styled'

const InputBar = ({ children, fields, buttons, onSubmit, ...props }) => {
  const data = [...fields, ...buttons]
  const Wrapper = buttons.length ? WrapperButtons : WrapperFields
  return (
    <NavWrapper {...props}>
      <Wrapper columns={data.length}>
        <FormBuilder onSubmit={onSubmit} fields={data}>
          {children}
        </FormBuilder>
      </Wrapper>
    </NavWrapper>
  )
}

InputBar.defaultProps = {
  fields: [],
  buttons: [],
}

InputBar.propTypes = {
  fields: PropTypes.array,
  buttons: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
}

export default InputBar
