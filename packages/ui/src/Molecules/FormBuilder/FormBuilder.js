import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Form } from '../../Atoms/Forms'

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
    <Fragment>
      <Form onSubmit={onSubmit}>
        {fields.map((field, index) => renderComponent(field, index))}
        {children}
      </Form>
    </Fragment>
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
