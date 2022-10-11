import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Typography from 'components/Typography'
import PreTitle from 'components/PreTitle'
import get from 'utils/get'
import PropTypes from 'prop-types'
import Lottie from 'components/Lottie'
import { useInView } from 'react-intersection-observer'

const Section = styled.section`
  display: flex;
  justify-content: center;
  color: ${get('colors.white')};
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-left: -5px;
    margin-right: -5px;
  }
`

const ColoredContainer = styled.div`
  max-width: 504px;
  width: 100%;
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  padding: 51px 0 40px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 82px 0;
    max-width: 740px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 970px;
    padding: 120px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    max-width: 1332px;
  }
`

const Text = styled.div`
  grid-column: 1 / 5;
  padding: 0 0 0 40px;
  z-index: 1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 2 / 6;
    padding: 0;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 6;
  }
`

const Title = styled(Typography)`
  margin-top: 14px;
  strong {
    color: ${p => p.$color};
  }
`

const Description = styled(Typography)`
  display: block;
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 32px;
  }
`

const Keypoints = styled.div`
  grid-column: 1 / -1;
  padding: 0 40px;
  position: relative;
  overflow: visible;
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
    grid-gap: 0 16px;

    padding: 0;
    grid-column: 7 / -1;
  }
`

const Keypoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${get('breakpoints.md')}) {
    padding-right: 24px;
  }
`

const Number = styled.span`
  font-family: ${get('fontFamily.poppins')};
  font-weight: ${get('fontWeight.bold')};
  letter-spacing: -0.02em;
  font-size: 50px;
  line-height: 75px;

  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 64px;
    line-height: 96px;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    font-size: 72px;
    line-height: 108px;
  }
`

const Cta = ({ cta, color, ...props }) => (
  <Button
    variant="secondary"
    color={color}
    href={cta.url}
    target={cta.target}
    {...props}
  >
    <Typography variant="body.s.bold">{cta.title}</Typography>
  </Button>
)

const DesktopCta = styled(Cta)`
  display: none;
  @media (min-width: ${get('breakpoints.md')}) {
    display: inline-flex;
    margin-top: 40px;
  }
`

const MobileCta = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 45px;
  @media (min-width: ${get('breakpoints.md')}) {
    display: none;
  }
`

const Animation = styled.div`
  position: absolute;
  width: 120%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${get('breakpoints.md')}) {
    width: 143%;
    left: 46%;
  }
`

const OpenSource = ({
  openSourceProps: OSProps,
  color = get('colors.hotPink'),
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  return (
    <Section ref={ref} {...props}>
      <ColoredContainer>
        <Grid>
          <Text>
            <PreTitle color={color} preTitle={OSProps.preTitle} />
            <Title
              variant="title.xl"
              forwardedAs="h2"
              $color={color}
              dangerouslySetInnerHTML={{ __html: OSProps.title }}
            />
            <Description>{OSProps.description}</Description>
            <DesktopCta cta={OSProps.cta} color={color} />
          </Text>
          <Keypoints>
            <Animation>
              <Lottie
                animation={OSProps.lottie}
                options={{ loop: false }}
                isPaused={!inView}
                ariaLabel="Popping stars"
              />
            </Animation>
            {OSProps.keypoints.map(keypoint => (
              <Keypoint key={keypoint.title}>
                <Number>{keypoint.number}</Number>
                <PreTitle
                  color={get('colors.white')}
                  preTitle={keypoint.title}
                  style={{ maxWidth: 160, textAlign: 'center' }}
                />
              </Keypoint>
            ))}
          </Keypoints>
          <MobileCta>
            <Cta cta={OSProps.cta} color={color} />
          </MobileCta>
        </Grid>
      </ColoredContainer>
    </Section>
  )
}
OpenSource.propTypes = {
  /**
   * Primary color of the block
   */
  color: PropTypes.string,
}

OpenSource.defaultProps = {
  color: get('colors.hotPink'),
}

export default OpenSource
