import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Atoms/Button'
import { ArrowIcon } from '../../Atoms/Icon'
import { Heading } from '../../Atoms/Typography'

import { NavWrapper, Action, Area } from './styled'

const Header = ({ text, action }) => (
  <NavWrapper>
    <Action>
      <Button {...action}>
        <ArrowIcon fill="#fff" width={24} height={24} />
      </Button>
    </Action>
    <Area>
      <Heading variant="secondary" size="small">
        {text}
      </Heading>
    </Area>
  </NavWrapper>
)

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
