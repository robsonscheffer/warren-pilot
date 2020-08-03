import React from 'react'
import PropTypes from 'prop-types'

import Message from '../../Molecules/Message'

import { Wrapper } from './styled'

const TalkingBoard = ({ maxHeight, messages }) => {
  return (
    <Wrapper maxHeight={maxHeight}>
      {messages.map((msg) => (
        <Message {...msg} />
      ))}
    </Wrapper>
  )
}

TalkingBoard.defaultProps = {
  maxHeight: null,
}

TalkingBoard.propTypes = {
  messages: PropTypes.array,
  maxHeight: PropTypes.string,
}

export default TalkingBoard
