import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { default as Sent, Received } from '../../Molecules/Message'

import { Wrapper } from './styled'

const TalkingBoard = ({ maxHeight, messages, onFinish }) => {
  const [lastMessageIndex, setLastMessageIndex] = useState(0)
  const list = messages.filter((msg, index) => index <= lastMessageIndex)

  useEffect(() => {
    if (lastMessageIndex === messages.length) {
      onFinish(lastMessageIndex)
    }
  }, [messages.length, lastMessageIndex])

  const onFinishPresent = () => {
    if (lastMessageIndex < messages.length) {
      setLastMessageIndex(lastMessageIndex + 1)
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
  onFinish: null,
}

TalkingBoard.propTypes = {
  messages: PropTypes.array,
  maxHeight: PropTypes.string,
  onFinishMessages: PropTypes.func,
}

export default TalkingBoard
