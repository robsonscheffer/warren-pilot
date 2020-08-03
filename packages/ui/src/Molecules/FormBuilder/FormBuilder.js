import React from 'react'
import PropTypes from 'prop-types'

import { Form, Input } from '../../Atoms/Forms'

import { Wrapper } from './styled'

const FormBuilder = ({ onSubmit, fields, children }) => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {fields
          .filter((field) => field.type === 'text' || field.type === 'number')
          .map((field) => (
            <Input {...field} />
          ))}
        {children}
      </Form>
    </Wrapper>
  )
}

FormBuilder.defaultProps = {
  fields: [],
}

FormBuilder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      mask: PropTypes.string,
    })
  ),
}

export default FormBuilder
