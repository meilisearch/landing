import React from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import BaseInput from 'components/Input'
import Typography from 'components/Typography'
import get from 'utils/get'

const Container = styled.div`
  background-color: ${get('colors.valhalla.400')};
  border-radius: 16px;
  padding: 32px 20px;
  margin-top: 42px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 42px;
    padding: 32px;
  }
`

const Description = styled(Typography)`
  color: ${get('colors.ashes')};
  margin-top: 12px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 24px;
  }
`

const Cta = styled(Button)`
  border-width: 1px;
  margin-top: 12px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-left: 20px;
    margin-top: 0;
  }
`

const InputButtonContainer = styled.div`
  margin-top: 12px;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: flex;
    align-items: center;
    margin-top: 24px;
  }
`

const Input = styled(BaseInput)`
  width: 100%;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: flex;
    flex: 1;
  }
`

const Newsletter = ({ newsletterProps }) => {
  const [email, setEmail] = React.useState('')

  return (
    <Container>
      <Typography variant="title.caps">{newsletterProps.title}</Typography>
      <Description variant="body.s.default">
        {newsletterProps.description}
      </Description>
      <InputButtonContainer>
        <Input
          type="email"
          placeholder={newsletterProps.placeholder}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Cta
          href={`${newsletterProps.cta.href(email)}`}
          target={newsletterProps.cta.target}
          color={get('colors.white')}
          variant="secondary"
          size="small"
        >
          <Typography variant="body.s.bold">
            {newsletterProps.cta.title}
          </Typography>
        </Cta>
      </InputButtonContainer>
    </Container>
  )
}

export default Newsletter
