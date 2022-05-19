import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Typography from 'components/Typography'
import get from 'utils/get'

const StyledMarkdown = styled.div`
  color: ${get('colors.ashes.900')};
  margin-top: 16px;
  font-family: Inter;
  h1 {
    color: ${get('colors.white')};
    display: block;
  }
  h2 {
    color: ${get('colors.ashes.600')};
    display: block;
  }
  h3 {
    color: ${get('colors.hotPink')};
    display: block;
  }
  a {
    color: ${get('colors.white')};
    border-bottom: 1px solid ${get('colors.hotPink')};
  }
`

const Markdown = ({ children }) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown
        components={{
          h1: props => (
            <Typography variant="title.m" forwardedAs="h1" {...props} />
          ),
          h2: props => (
            <Typography variant="title.s" forwardedAs="h2" {...props} />
          ),
          h3: props => (
            <Typography variant="title.xs" forwardedAs="h3" {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </StyledMarkdown>
  )
}

export default Markdown
