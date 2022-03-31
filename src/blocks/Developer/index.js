import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import TitleSection from './TitleSection'
import Terminal from './Terminal'
import Text from './Text'

const Section = styled.section`
  display: none;
  @media (min-width: ${get('breakpoints.md')}) {
    display: block;
    margin: 0 -32px;
  }
`

const Developer = ({ developerProps, code_samples, ...props }) => {
  return (
    <Section {...props}>
      <TitleSection developerProps={developerProps} />
      <Terminal developerProps={developerProps} code_samples={code_samples} />
      <Text developerProps={developerProps} />
    </Section>
  )
}
export default Developer
