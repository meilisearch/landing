import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'

const Wrapper = styled.div`
  background-color: ${get('colors.dodgerBlue')};
  padding: 16px;
  height: var(--banner-height);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    color: ${get('colors.white')};
    transition: border-bottom 300ms;
    border-bottom: 2px solid ${get('colors.white')};
    &:hover,
    &:focus {
      border-bottom: 2px solid ${get('colors.hotPink')};
    }
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
