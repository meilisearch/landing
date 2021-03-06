import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import AnchorTitles from 'components/AnchorTitles'

const LeftColumn = styled.div`
  grid-column: 1 / -1;
  color: ${get('colors.white')};
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 7;
  }
`

// Tricks the scroll behaviour in order to not have the top of the block appearing below the header
const Title = styled(Typography)`
  margin-top: -160px;
  padding-top: 166px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: -160px;
    padding-top: 316px;
  }
`

const Description = styled(Typography)`
  margin-top: 305px;
  display: block;
  opacity: 0.9;
  color: ${get('colors.ashes')};
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 42px;
  }
`

const MobileImage = styled.div`
  display: block;
  z-index: 2;
  background: url(${p => p.$image}) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -36px;
  height: 328px;
  width: 361px;
  @media (min-width: ${get('breakpoints.md')}) {
    display: none;
  }
`

const RightColumn = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.md')}) {
    display: block;
    position: relative;
    grid-column: 8 / -1;
  }
`

const DesktopImage = styled.div`
  background: url(${p => p.$image}) no-repeat;
  background-size: contain;
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: -10px;
  height: 366px;
  width: 339px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 516px;
    width: 480px;
    top: 12px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    height: 738px;
    width: 684px;
    top: -90px;
    left: -32px;
  }
`

const Decorator = styled.div`
  background: url(/images/decorator2.svg) no-repeat;
  background-size: contain;
  position: absolute;
  top: 208px;
  right: 0;
  bottom: 0;
  left: 130px;
  height: 251px;
  width: 197px;
  z-index: 1;
  @media (min-width: ${get('breakpoints.md')}) {
    top: 28px;
    left: 156px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    background: url(/images/decorator3.svg) no-repeat;
    background-size: 365px 464px;
    width: 365px;
    height: 464px;
    left: -96px;
    top: 66px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    background-size: 473px 602px;
    width: 473px;
    height: 602px;
    left: -235px;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 3;
`

const Step1 = ({
  step1Props: step,
  steps = [],
  color = get('colors.lila'),
  ...props
}) => (
  <section {...props}>
    <Grid style={{ position: 'relative' }}>
      <LeftColumn>
        <Content>
          <AnchorTitles links={steps} current={step.preTitle} color={color} />
          <Title variant="title.xl" forwardedAs="h2" id={step.title}>
            {step.title}
          </Title>
          <Description>{step.description}</Description>
          <Button
            target={step.cta.target}
            href={step.cta.url}
            color={color}
            style={{ marginTop: 32 }}
          >
            <Typography variant="body.s.bold">{step.cta.title}</Typography>
          </Button>
        </Content>
        <MobileImage $image={step.mobileImage} />
        <Decorator />
      </LeftColumn>
      <RightColumn>
        <DesktopImage $image={step.image} />
      </RightColumn>
    </Grid>
  </section>
)

Step1.propTypes = {
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

Step1.defaultProps = {
  color: get('colors.lila'),
  steps: [],
}

export default Step1
