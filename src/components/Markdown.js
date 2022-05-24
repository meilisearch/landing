import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Typography from 'components/Typography'
import get from 'utils/get'

const StyledMarkdown = styled.div`
  color: ${get('colors.ashes.900')};
  margin-top: 16px;
  font-family: Inter;
  word-break: break-word;
  h1 {
    color: ${get('colors.white')};
    display: block;
  }
  h2 {
    color: ${get('colors.ashes')};
    display: block;
    margin: 112px 0 24px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 80px;
      border-bottom: 1px solid ${get('colors.ashes.900')};
      opacity: 0.2;
    }
  }
  h3 {
    color: ${get('colors.ashes')};
    display: block;
    margin: 48px 0 24px;
  }
  a {
    color: ${get('colors.ashes')};
    border-bottom: 1px solid ${get('colors.hotPink')};
    font-weight: ${get('fontWeight.semibold')};
    &:hover {
      border-bottom: 2px solid ${get('colors.hotPink')};
    }
  }
  li {
    margin: 8px 0;
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
