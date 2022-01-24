import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'
import PropTypes from 'prop-types'
import AnchorTitles from 'components/AnchorTitles'

const Section = styled.section`
  color: ${get('colors.white')};
`

// Tricks the scroll behaviour in order to not have the top of the block appearing below the header
const Title = styled(Typography)`
  margin-top: 6px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: -160px;
    padding-top: calc(160px + 44px);
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: -160px;
    padding-top: calc(160px + 88px);
  }
`

const LeftColumn = styled.div`
  grid-column: 1 / 4;
  z-index: 2;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 7;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 1 / 6;
  }
`

const RightColumn = styled.div`
  grid-column: 4 / -1;
  position: relative;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 9 / -1;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 10 / -1;
  }
`

const Description = styled(Typography)`
  display: inline-block;
  margin-top: 20px;
  padding-right: 16px;
  color: ${get('colors.ashes')};
  opacity: 0.9;
  @media (min-width: ${get('breakpoints.md')}) {
    padding-right: 0;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 36px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 40px;
  }
`

const Illustration = styled.div`
  display: block;
  background: url(${p => p.$image}) no-repeat;
  background-size: 196px 330px;
  position: absolute;
  top: -22px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 196px;
  height: 330px;
  @media (min-width: ${get('breakpoints.md')}) {
    left: -12px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    top: 324px;
    background-size: 308px 460px;
    width: 308px;
    height: 460px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    top: 172px;
    background-size: 438px 654px;
    width: 438px;
    height: 654px;
    left: 16px;
  }
`

const Decorator = styled.div`
  background: url(/images/decorator4.svg) no-repeat;
  background-size: 196px 251px;
  position: absolute;
  top: 74px;
  right: auto;
  bottom: auto;
  left: -50px;
  width: 196px;
  height: 251px;
  z-index: 1;
  @media (min-width: ${get('breakpoints.md')}) {
    top: 12px;
    left: -62px;
    background-size: 234px 298px;
    width: 234px;
    height: 298px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    top: 268px;
    left: 248px;
    background-size: 364px 464px;
    width: 364px;
    height: 464px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    top: 198px;
    left: 180px;
    background-size: 471px 600px;
    width: 471px;
    height: 600px;
  }
`

const Cards = styled(Grid)`
  grid-column: 1 / -1;
  z-index: 2;
  display: grid;
  margin-top: 135px;
  > div + div {
    margin-top: 16px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 182px;
    grid-template-columns: repeat(2, 1fr);
    > div + div {
      margin-top: 0;
    }
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 100px;
    grid-column: 1 / 9;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 36px 24px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 66px;
    grid-gap: 36px 20px;
  }
`

const CardTitle = styled(Typography)`
  margin-top: 8px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 16px;
  }
`

const CardDescription = styled(Typography)`
  color: ${get('colors.ashes.100')};
  opacity: 0.9;
  margin-top: 8px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 16px;
  }
`

const CardWrapper = styled.div`
  padding: 24px;
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: auto;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    background-color: transparent;
    padding: 0;
  }
`

const StyledIcon = styled.div`
  height: 25px;
  width: 25px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 30px;
    width: 30px;
  }
`

const Card = ({ card, color }) => {
  const Icon = card.icon
  return (
    <CardWrapper>
      <StyledIcon as={Icon} color={color} />
      <CardTitle variant="title3" forwardedAs="h3">
        {card.title}
      </CardTitle>
      <CardDescription variant="small">{card.description}</CardDescription>
    </CardWrapper>
  )
}

const MobileCta = styled.div`
  display: block;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 32px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 48px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const DesktopCta = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    z-index: 2;
    display: flex;
    grid-column: 7 / 10;
    align-items: flex-end;
    justify-content: center;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 6 / 9;
  }
`

const Step2 = ({
  step2Props: step,
  steps = [],
  color = get('colors.hotPink'),
  ...props
}) => (
  <Section {...props}>
    <Grid style={{ position: 'relative' }}>
      <Decorator />
      <LeftColumn>
        <AnchorTitles links={steps} current={step.preTitle} color={color} />
        <Title variant="title1" forwardedAs="h2" id={step.title} color={color}>
          {step.title}
        </Title>
        <Description>{step.description}</Description>
      </LeftColumn>
      <DesktopCta>
        <Button href={step.cta.url} target={step.cta.target} color={color}>
          <Typography variant="ctaBig">{step.cta.title}</Typography>
        </Button>
      </DesktopCta>
      <RightColumn>
        <Illustration $image={step.image} />
      </RightColumn>
      <Cards>
        {step.cards?.map(card => (
          <Card card={card} color={color} key={card.title} />
        ))}
      </Cards>
      <MobileCta>
        <Button href={step.cta.url} target={step.cta.target} color={color}>
          <Typography variant="ctaBig">{step.cta.title}</Typography>
        </Button>
      </MobileCta>
    </Grid>
  </Section>
)

Step2.propTypes = {
  /**
   * Primary color of the block
   */
  color: PropTypes.string,
  /**
   * List of the different steps to display the anchors
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      preTitle: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

Step2.defaultProps = {
  color: get('colors.hotPink'),
  steps: [],
}

export default Step2
