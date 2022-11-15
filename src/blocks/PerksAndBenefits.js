import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'
import BaseCard from 'components/Card'
import useWindowSize from 'hooks/useWindowSize'
import isBreakpointSmaller from 'utils/isBreakpointSmaller'

const Section = styled.section`
  padding: 72px 0;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 88px 0;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const FirstRow = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 9;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 7;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 1 / 6;
  }
`
const Title = styled(Typography)`
  color: ${get('colors.white')};
  margin-top: 4px;
`

const Description = styled(Typography)`
  color: ${get('colors.ashes.100')};
  margin-top: 24px;
`

const Card = styled(BaseCard)`
  grid-column: 1 / -1;
  text-align: left;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: span 4;
  }
`

const Benefits = styled.div`
  margin-top: 48px;
  text-align: center;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 56px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 96px;
  }
`

const Icon = styled(Typography)`
  font-family: ${get('fontFamily.poppins')};
  font-weight: ${get('fontWeight.bold')};
  line-height: 130%;
  font-size: 23px;
  @media (min-width: ${get('breakpoints.md')}) {
    font-size: 27px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 33px;
  }
`

const BenefitTitle = styled(Typography)`
  color: ${get('colors.white')};
  margin-top: 8px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 16px;
  }
`

const BenefitDescription = styled(Typography)`
  color: ${get('colors.ashes.600')};
  margin-top: 8px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 16px;
  }
`

const Benefit = ({ benefit }) => (
  <Card>
    <Icon>{benefit.icon}</Icon>
    <BenefitTitle variant="title.xs">{benefit.title}</BenefitTitle>
    <BenefitDescription variant="body.s.default">
      {benefit.description}
    </BenefitDescription>
  </Card>
)

const Cta = styled(Button)`
  display: inline-flex;
  margin-top: 48px;
  @media (min-width: ${get('breakpoints.md')}) {
    display: none;
  }
`

const PerksAndBenefits = ({ perksAndBenefits }) => {
  const { benefits, preTitle, title, description, loadMore, loadLess } =
    perksAndBenefits
  const { width: windowWidth } = useWindowSize()
  const [showMore, setShowMore] = React.useState(false)

  const isMobile = React.useMemo(
    () => isBreakpointSmaller(windowWidth, get('breakpoints.md')),
    [windowWidth]
  )

  return (
    <Section>
      <Grid>
        <FirstRow>
          <PreTitle preTitle={preTitle} />
          <Title variant="title.m">{title}</Title>
          <Description variant="body.s.default">{description}</Description>
        </FirstRow>
      </Grid>
      <Benefits>
        <Grid>
          {/* On mobile, we display only 5 cards by default.
          Then, the length depends on the `showMore` toggled by the `Load more/less` button  */}
          {benefits
            .slice(
              0,
              isMobile ? (showMore ? benefits.length : 5) : benefits.length
            )
            .map(benefit => (
              <Benefit benefit={benefit} key={benefit.title} />
            ))}
        </Grid>
        <Cta
          variant="secondary"
          color={get('colors.white')}
          onClick={() => setShowMore(prevShowMore => !prevShowMore)}
        >
          <Typography variant="body.s.bold">
            {showMore ? loadLess : loadMore}
          </Typography>
        </Cta>
      </Benefits>
    </Section>
  )
}

export default PerksAndBenefits
