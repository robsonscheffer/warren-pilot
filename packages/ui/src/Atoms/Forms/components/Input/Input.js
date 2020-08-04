import React from 'react'
import PropTypes from 'prop-types'

import ConnectForm from '../Form/ConnectForm'

import { FormField, FormControll } from './styled'

const Input = ({ validationRules, ...props }) => {
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <FormControll>
          <FormField {...props} ref={register(validationRules)} />
          {errors.exampleRequired && <span>This field is required</span>}
        </FormControll>
      )}
    </ConnectForm>
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
