import React, { memo, useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'

import { WarrenIcon } from '../../Atoms/Icon'
import { Text } from '../../Atoms/Typography'

import { WrapperReceived } from './styled'

import { splitMessages } from './helpers'

const Received = ({ type, text, typist, onFinish, ...props }) => {
  const messages = useMemo(() => splitMessages(text), [text])
  return (
    <WrapperReceived>
      <WarrenIcon />
      <Text as="div" py={[1]} mb={[1]} fontSize="medium" lineHeight="medium">
        <Typist {...typist} onTypingDone={onFinish}>
          {messages.map((msg, index) => (
            <span key={`typist-${index}`}>
              {msg.text}
              <Typist.Delay ms={msg.delay} />
            </span>
          ))}
        </Typist>
      </Text>
    </WrapperReceived>
  )
}

Received.defaultProps = {
  typist: {
    cursor: {
      show: false,
    },
    avgTypingDelay: 5,
  },
  onFinish: () => {},
}

Received.propTypes = {
  text: PropTypes.string.isRequired,
  typist: PropTypes.object,
  onFinish: PropTypes.func,
}

export default memo(Received)
