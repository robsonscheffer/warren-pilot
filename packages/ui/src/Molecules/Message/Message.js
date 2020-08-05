import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'

import { AvatarTextIcon } from '../../Atoms/Icon'
import { Text } from '../../Atoms/Typography'

import { WrapperSent } from './styled'

const Message = ({ text, label, onFinish }) => {
  useEffect(() => {
    onFinish('sent')
  }, [text])

  return (
    <WrapperSent>
      <Text py={[1]} mb={[1]} fontSize="medium" lineHeight="medium">
        {text}
      </Text>
      <AvatarTextIcon fill="#000">{label}</AvatarTextIcon>
    </WrapperSent>
  )
}

Message.defaultProps = {
  label: '',
  onFinish: () => {},
}

Message.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
  onFinish: PropTypes.func,
}

export default memo(Message)
