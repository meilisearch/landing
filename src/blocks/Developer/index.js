import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import TitleSection from './TitleSection'
import Terminal from './Terminal'

const Section = styled.section`
  margin: 0 -16px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
  }
`

const Body = styled.div``

const Developer = ({ developerProps, code_samples, ...props }) => {
  return (
    <Section {...props}>
      <TitleSection developerProps={developerProps} />
      <Body>
        <Terminal developerProps={developerProps} code_samples={code_samples} />
      </Body>
    </Section>
  )
}
export default Developer
