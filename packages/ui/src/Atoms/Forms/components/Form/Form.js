import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const Form = ({ onSubmit, validationRules, children, ...props }) => {
  const { handleSubmit } = useForm()
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
}

Form.defaultProps = {
  onSubmit: () => {},
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form
