import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Button from 'components/Button'
import PreTitle from 'components/PreTitle'
import Typography from 'components/Typography'

const Section = styled.section`
  color: ${get('colors.white')};
  background-color: ${get('colors.valhalla.700')};
  margin: 0 -16px;
  padding: 64px 16px 72px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 58px 32px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 96px 32px;
  }
`

const LeftColumn = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 3 / 11;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / -1;
  }
`

const CardWrapper = styled.div`
  border-radius: 16px;
  border-width: 4px;
  border-style: solid;
  border-color: ${p => p.$color};
  padding: 32px;
  background-color: ${p => `${p.$color}4C`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 32px 19px 32px;
  }
`

const RightColumn = styled(Grid)`
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
  margin-top: calc(56px - 16px);
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: calc(48px - 16px);
    grid-column: 3 / 11;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: calc(72px - 16px);
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 28px;
  }
  ${CardWrapper}+${CardWrapper} {
    margin-top: 28px;
    @media (min-width: ${get('breakpoints.lg')}) {
      margin-top: 0;
    }
  }
`

const Title = styled(Typography)`
  margin-top: 8px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 16px;
  }
`

const Description = styled(Typography)`
  margin-top: 8px;
  color: ${get('colors.ashes')};
  opacity: 0.9;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 16px;
  }
`

const CardTitle = styled(Typography)`
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 25px;
  }
`

const CardDescription = styled(Typography)`
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 25px;
  }
`

const Cta = styled(Button)`
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 25px;
  }
`

const StyledIcon = styled.div`
  height: 30px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 44px;
  }
`

const Card = ({ title, description, color, icon: Icon, cta }) => (
  <CardWrapper $color={color}>
    <StyledIcon as={Icon} />
    <CardTitle variant="title3">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <Cta
      variant="secondary"
      color={get('colors.white')}
      href={cta.href}
      target={cta.target}
    >
      <Typography variant="ctaBig">{cta.title}</Typography>
    </Cta>
  </CardWrapper>
)

const Cards = ({ cardsProps, ...props }) => (
  <Section {...props}>
    <Grid style={{ position: 'relative' }}>
      <LeftColumn>
        <PreTitle
          color={get('colors.hotPink')}
          preTitle={cardsProps.preTitle}
        />
        <Title variant="title2" forwardedAs="h2">
          {cardsProps.title}
        </Title>
        <Description>{cardsProps.description}</Description>
      </LeftColumn>
      <RightColumn>
        {cardsProps.cards?.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </RightColumn>
    </Grid>
  </Section>
)

export default Cards
