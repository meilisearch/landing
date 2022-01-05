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
  padding: 0 16px;
  display: flex;
  justify-content: center;
  color: ${get('colors.white')};

  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 0 27px;
  }
  @media (min-width: ${get('breakpoints.desktop')}) {
    padding: 0 54px;
  }
`

const ColoredContainer = styled.div`
  max-width: 1276px;
  width: 100%;
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  padding: 51px 40px 40px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 82px 16px;
  }
  @media (min-width: ${get('breakpoints.desktop')}) {
    padding: 98px 16px 106px;
  }
`

const Text = styled.div`
  grid-column: 1 / 6;
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
  @media (min-width: ${get('breakpoints.desktop')}) {
    margin-top: 32px;
  }
`

const Keypoints = styled.div`
  position: relative;
  overflow: visible;
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  @media (min-width: ${get('breakpoints.tablet')}) {
    margin-top: 0;
    grid-column: 6 / -1;
  }
`

const Keypoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Number = styled.span`
  font-family: Poppins;
  font-weight: ${get('fontWeight.bold')};
  letter-spacing: -0.02em;
  font-size: 50px;
  line-height: 75px;

  @media (min-width: ${get('breakpoints.tablet')}) {
    font-size: 64px;
    line-height: 96px;
  }

  @media (min-width: ${get('breakpoints.desktop')}) {
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
    <Typography variant="ctaBig">{cta.title}</Typography>
  </Button>
)

const DesktopCta = styled(Cta)`
  display: none;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: inline-flex;
    margin-top: 40px;
  }
`

const MobileCta = styled(Cta)`
  display: inline-flex;
  margin-top: 45px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: none;
  }
`

const Animation = styled.div`
  position: absolute;
  width: 120%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const OpenSource = ({
  openSourceProps: OSProps,
  color = get('colors.hotPink'),
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <Section ref={ref} {...props}>
      <ColoredContainer>
        <Grid>
          <Text>
            <PreTitle color={color} preTitle={OSProps.preTitle} />
            <Title
              variant="h1"
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
          <div style={{ textAlign: 'center' }}>
            <MobileCta cta={OSProps.cta} color={color} />
          </div>
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
