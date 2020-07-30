import React from 'react'

import { Theme } from './components/Theme'
import GlobalStyles from './components/GlobalStyles'

import { ButtonPrimary } from './components/Atoms/Button'

const App = () => (
  <>
    <Theme>
      <GlobalStyles />
      <ButtonPrimary>Teste</ButtonPrimary>
    </Theme>
  </>
)

export default App
