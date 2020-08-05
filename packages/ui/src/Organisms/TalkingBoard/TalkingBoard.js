import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { default as Sent, Received } from '../../Molecules/Message'

import { Wrapper } from './styled'

const TalkingBoard = ({ maxHeight, messages, onFinish }) => {
  const [lastMessageIndex, setLastMessageIndex] = useState(0)
  const list = messages.filter((msg, index) => index <= lastMessageIndex)
  const isLastPresentedMessage = () => lastMessageIndex + 1 == messages.length

  const onFinishPresent = (type) => {
    if (lastMessageIndex < messages.length) {
      setLastMessageIndex(lastMessageIndex + 1)
    }
    if (type === 'received' && isLastPresentedMessage()) {
      // finished load all
      onFinish(lastMessageIndex)
    }
  }

  return (
    <Wrapper maxHeight={maxHeight}>
      {list.map((msg, index) => {
        const Message = msg.type === 'received' ? Received : Sent
        return (
          <Message
            key={`message-${index}`}
            {...msg}
            onFinish={onFinishPresent}
          />
        )
      })}
    </Wrapper>
  )
}

TalkingBoard.defaultProps = {
  maxHeight: null,
  onFinish: () => {},
}

TalkingBoard.propTypes = {
  messages: PropTypes.array,
  maxHeight: PropTypes.string,
  onFinish: PropTypes.func,
  onFinishMessages: PropTypes.func,
}

export default TalkingBoard
