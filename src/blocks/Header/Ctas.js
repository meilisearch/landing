import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Button from 'components/Button'
import get from 'utils/get'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${get('breakpoints.lg')}) {
    width: auto;
    display: block;
  }
`

const Ctas = ({ headerProps, ...props }) => {
  const { cta1, cta2 } = headerProps
  return (
    <Wrapper {...props}>
      <Button
        href={cta1.href}
        color={get('colors.hotPink')}
        variant="secondary"
        target={cta1.target}
      >
        <Typography variant="body.s.bold">{cta1.title}</Typography>
      </Button>
      <Button
        href={cta2.href}
        target={cta2.target}
        color={get('colors.hotPink')}
        style={{ marginLeft: 24 }}
      >
        <Typography variant="body.s.bold">{cta2.title}</Typography>
      </Button>
    </Wrapper>
  )
}

export default Ctas
