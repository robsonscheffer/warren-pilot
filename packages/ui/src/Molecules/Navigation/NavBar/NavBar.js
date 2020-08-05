import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../Atoms/Button'
import { ArrowIcon } from '../../../Atoms/Icon'
import { HeadingS } from '../../../Atoms/Typography'

import { NavWrapper, Action, Area } from './styled'

const NavBar = ({ text, action }) => (
  <NavWrapper>
    <Action>
      <Button {...action}>
        <ArrowIcon fill="#fff" width={24} height={24} />
      </Button>
    </Action>
    <Area>
      <HeadingS tag="h1" color="textBodyInverse">
        {text}
      </HeadingS>
    </Area>
  </NavWrapper>
)

NavBar.propTypes = {
  text: PropTypes.string.isRequired,
}

export default NavBar
