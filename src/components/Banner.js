import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'

const Wrapper = styled.div`
  background-color: ${get('colors.dodgerBlue')};
  padding: 16px;
  height: 72px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    color: white;
    text-decoration: underline;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 24px;
  }
`

const Banner = ({ title }) => (
  <Wrapper>
    <Typography
      variant="body.m.bold"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </Wrapper>
)

export default Banner
