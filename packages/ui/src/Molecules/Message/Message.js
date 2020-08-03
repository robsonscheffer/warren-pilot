import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Text } from '../../Atoms/Typography'

import { WrapperReceived, WrapperSent, Typewriter } from './styled'

const Message = ({ type, text, origin }) => {
  const textMessage = useMemo(() => {
    return (
      <Text py={[1]} mb={[1]} fontSize="medium" lineHeight="medium">
        {text}
      </Text>
    )
  }, [text])

  if (type === 'received') {
    return (
      <WrapperReceived>
        {origin}
        {textMessage}
      </WrapperReceived>
    )
  }

  return (
    <WrapperSent>
      {textMessage}
      {origin}
    </WrapperSent>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['received', 'sent']).isRequired,
  origin: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default Message
