import React from 'react'
import PropTypes from 'prop-types'

import { Form, Input } from '../../Atoms/Forms'

import { Wrapper } from './styled'

import DynamicForm from './MapFormToComponent'

const FormBuilder = ({ onSubmit, fields, children }) => {
  const renderComponent = (props, index) => {
    const FormComponent = DynamicForm[props.field] || null
    if (!FormComponent) {
      return null
    }
    return <FormComponent key={`index-${index}`} {...props} />
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {fields.map((field, index) => renderComponent(field, index))}
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
      field: PropTypes.string.isRequired,
      mask: PropTypes.string,
    })
  ),
}

export default FormBuilder
