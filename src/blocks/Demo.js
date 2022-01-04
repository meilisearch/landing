import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Image from 'next/image'
import PropTypes from 'prop-types'

const LeftColumn = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.tablet')}) {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 80px;
    grid-column: 1 / 6;
    overflow: visible;
  }
`

const MobileImage = styled.div`
  display: block;
  margin-top: 28px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: none;
  }
`

const Content = styled.div`
  grid-column: 6 / -1;
  color: ${get('colors.white')};
`

const PreTitle = styled(Typography)`
  text-transform: uppercase;
`

const Title = styled(Typography)`
  margin-top: 16px;
`

const Description = styled(Typography)`
  margin-top: 16px;
  display: block;
`

const Keypoints = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px 32px;
  margin-top: 46px;
  @media (min-width: ${get('breakpoints.desktop')}) {
    margin-top: 82px;
    grid-gap: 82px 68px;
  }
`

const KeypointDescription = styled(Typography)`
  color: ${get('colors.valhalla.100')};
  margin-top: 8px;
  display: inline-block;
`

const StyledIcon = styled.div`
  height: 22px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    height: 28px;
  }
  @media (min-width: ${get('breakpoints.desktop')}) {
    height: 32px;
  }
`

const Keypoint = ({ keypoint, color, ...props }) => {
  const Icon = keypoint.icon
  return (
    <div {...props}>
      <StyledIcon as={Icon} color={color} />
      <Typography variant="h3" style={{ marginTop: 8 }}>
        {keypoint.title}
      </Typography>
      <KeypointDescription variant="small">
        {keypoint.description}
      </KeypointDescription>
    </div>
  )
}

const Cta = styled(Button)`
  margin-top: 46px;
  @media (min-width: ${get('breakpoints.desktop')}) {
    margin-top: 80px;
  }
`

const Section = styled.section`
  padding: 0 16px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    position: relative;
    padding: 0;
  }
`

const Decorator = styled.div`
  display: none;

  @media (min-width: ${get('breakpoints.tablet')}) {
    display: block;
    background: url(images/decorator1.svg) no-repeat;
    background-size: contain;
    position: absolute;
    top: -16px;
    bottom: 40px;
    right: 24px;
    height: auto;
    width: 586px;
    left: auto;
    background-position: top right;
  }

  @media (min-width: ${get('breakpoints.desktop')}) {
    width: 706px;
    top: 40px;
    background-position: right;
  }
`

const Demo = ({ demoProps, color = get('colors.lila'), ...props }) => (
  <Section {...props}>
    <Grid style={{ alignItems: 'center' }}>
      <LeftColumn>
        <Decorator />
        <div style={{ width: '100%' }}>
          <Image
            src={demoProps.demoImage}
            alt="Demo"
            layout="responsive"
            width={395}
            height={460}
          />
        </div>
      </LeftColumn>
      <Content>
        <PreTitle variant="preTitle" style={{ color: color }}>
          {demoProps.preTitle}
        </PreTitle>
        <Title variant="h2">{demoProps.title}</Title>
        <Description>{demoProps.description}</Description>
        <MobileImage>
          <Image
            src={demoProps.demoImage}
            alt="Demo"
            layout="responsive"
            width={395}
            height={460}
          />
        </MobileImage>
        <Keypoints>
          {demoProps.keypoints?.map(keypoint => (
            <Keypoint key={keypoint.title} keypoint={keypoint} color={color} />
          ))}
        </Keypoints>
        <Cta
          color={color}
          href={demoProps.cta.url}
          target={demoProps.cta.target}
        >
          <Typography>{demoProps.cta.title}</Typography>
        </Cta>
      </Content>
    </Grid>
  </Section>
)

Demo.propTypes = {
  /**
   * Primary color of the block
   */
  color: PropTypes.string,
}

Demo.defaultProps = {
  color: get('colors.lila'),
}

export default Demo
