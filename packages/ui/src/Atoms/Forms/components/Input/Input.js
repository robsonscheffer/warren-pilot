import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { FormField, FormControll } from './styled'

const Input = ({ validationRules, ...props }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  console.log('errors', errors)
  return (
    <div>
      <FormField type="text" {...props} ref={register(validationRules)} />
      {errors.exampleRequired && <span>This field is required</span>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  validationRules: {},
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.object,
}

export default Input
