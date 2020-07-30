import styled from 'styled-components'

import Text from '../Text'

const Heading = styled(Text)`
  font-size: 3em;
  font-weight: 700;
`
Heading.defaultProps = {
  as: 'h1',
}

const Title = styled(Text)`
  font-size: 2em;
  font-weight: 700;
`
Title.defaultProps = {
  as: 'h2',
}

const SubTitle = styled(Text)`
  font-size: 0.875rem;
  font-weight: 700;
`
SubTitle.defaultProps = {
  as: 'h3',
}

export { Title, Heading, SubTitle }
