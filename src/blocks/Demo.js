import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import PreTitle from 'components/PreTitle'
import Image from 'next/image'
import PropTypes from 'prop-types'

const LeftColumn = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 38px;
    grid-column: 1 / 6;
    overflow: visible;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding-right: 68px;
  }
`

const MobileImage = styled.div`
  display: block;
  margin: 48px auto 0;
  max-width: 284px;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const Content = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 3 / 11;
    text-align: center;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 6 / -1;
    text-align: left;
  }
  color: ${get('colors.white')};
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
  margin-top: 48px;
  @media (min-width: ${get('breakpoints.md')}) {
    text-align: left;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-gap: 75px 55px;
  }
`

const KeypointDescription = styled(Typography)`
  color: ${get('colors.valhalla.100')};
  margin-top: 8px;
  display: inline-block;
`

const StyledIcon = styled.div`
  height: 25px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 30px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    height: 35px;
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

const Cta = styled.div`
  text-align: center;
  margin-top: 28px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 48px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    text-align: left;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 72px;
  }
`

const Section = styled.section`
  @media (min-width: ${get('breakpoints.lg')}) {
    position: relative;
  }
`

const Decorator = styled.div`
  display: none;

  @media (min-width: ${get('breakpoints.lg')}) {
    display: block;
    background: url(images/decorator1.svg) no-repeat;
    background-size: contain;
    position: absolute;
    top: -24px;
    bottom: 40px;
    right: 24px;
    height: auto;
    width: 586px;
    left: auto;
    background-position: top right;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    width: 706px;
    top: 40px;
    background-position: right;
  }
`

const SearchImage = styled.div`
  width: 100%;
  margin-right: -38px;
  margin-top: -168px;
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: -124px;
  }
`

const Demo = ({ demoProps, color = get('colors.lila'), ...props }) => (
  <Section {...props}>
    <Grid style={{ alignItems: 'center' }}>
      <LeftColumn>
        <Decorator />
        <SearchImage>
          <Image
            src={demoProps.demoImage}
            alt="Demo"
            layout="responsive"
            width={395}
            height={460}
          />
        </SearchImage>
      </LeftColumn>
      <Content>
        <PreTitle color={color} preTitle={demoProps.preTitle} />
        <Title variant="h2">{demoProps.title}</Title>
        <Description>{demoProps.description}</Description>
        <MobileImage>
          <Image
            src={demoProps.demoImage}
            alt="Demo"
            layout="responsive"
            width={326}
            height={293}
          />
        </MobileImage>
        <Keypoints>
          {demoProps.keypoints?.map(keypoint => (
            <Keypoint key={keypoint.title} keypoint={keypoint} color={color} />
          ))}
        </Keypoints>
        <Cta>
          <Button
            color={color}
            href={demoProps.cta.url}
            target={demoProps.cta.target}
          >
            <Typography>{demoProps.cta.title}</Typography>
          </Button>
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
