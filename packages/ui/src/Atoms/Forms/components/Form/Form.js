import React from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider } from 'react-hook-form'

const Form = ({ onSubmit, validationRules, children, ...props }) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.defaultProps = {
  onSubmit: () => {},
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form
