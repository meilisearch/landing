import PreTitle from 'components/PreTitle'
import BaseGrid from 'components/Grid'
import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'

const Section = styled.section`
  background-color: ${get('colors.valhalla.700')};
  margin: 0 -16px;
  padding: 72px 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 88px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled(Typography)`
  color: white;
  margin-top: 4px;
`

const Description = styled(Typography)`
  color: ${get('colors.ashes')};
  margin-top: 8px;
  max-width: 255px;
  @media (min-width: ${get('breakpoints.md')}) {
    max-width: initial;
  }
`

const InvestorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Names = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Investor = ({ investor }) => {
  const { icon: Icon, names, company } = investor
  return (
    <InvestorContainer>
      <Icon width={100} height={100} />
      <Names>
        {names.map(name => (
          <Typography variant="body.s.bold" key={name} style={{ marginTop: 4 }}>
            {name}
          </Typography>
        ))}
      </Names>
      <Typography
        variant="body.s.default"
        style={{ marginTop: 4, color: get('colors.ashes.600') }}
      >
        {company}
      </Typography>
    </InvestorContainer>
  )
}

const Grid = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  margin-top: 48px;
  color: white;
  grid-gap: 32px 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 56px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 56px 16px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 72px;
    padding: 0 76px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 96px;
    padding: 0 88px;
  }
`

const Investors = ({ investors, ...props }) => {
  return (
    <Section {...props}>
      <TextSection>
        <PreTitle color={get('colors.hotPink')} preTitle={investors.preTitle} />
        <Title variant="title.m" forwardedAs="h2">
          {investors.title}
        </Title>
        <Description variant="body.s.default">
          {investors.description}
        </Description>
      </TextSection>
      <Grid>
        {investors.list?.map(investor => (
          <Investor investor={investor} key={investor.company} />
        ))}
      </Grid>
    </Section>
  )
}

export default Investors
