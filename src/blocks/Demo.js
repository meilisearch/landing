import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import InteractiveSearch from 'components/InteractiveSearch'
import PreTitle from 'components/PreTitle'
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
  opacity: 0.9;
  color: ${get('colors.ashes.100')};
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
  opacity: 0.9;
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

const KeypointTitle = styled(Typography)`
  margin-top: 8px;
  display: block;
`

const KeypointWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Keypoint = ({ keypoint, color, ...props }) => {
  const Icon = keypoint.icon
  return (
    <KeypointWrapper {...props}>
      <StyledIcon as={Icon} color={color} />
      <KeypointTitle variant="title3" forwardedAs="h3">
        {keypoint.title}
      </KeypointTitle>
      <KeypointDescription variant="small">
        {keypoint.description}
      </KeypointDescription>
    </KeypointWrapper>
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

const SearchContainer = styled.div`
  width: 100%;
  height: 460px;
  margin-right: -38px;
  z-index: 2;
  position: relative;
`

const MobileSearchContainer = styled(SearchContainer)`
  display: flex;
  justify-content: center;
  margin: 48px auto 0;
  width: 100%;
  max-width: 344px;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const Demo = ({ demoProps, color = get('colors.lila'), ...props }) => (
  <Section {...props}>
    <Grid style={{ alignItems: 'center' }}>
      <LeftColumn>
        <Decorator />
        <SearchContainer>
          <InteractiveSearch searchStats={demoProps.searchStats} />
        </SearchContainer>
      </LeftColumn>
      <Content>
        <PreTitle color={color} preTitle={demoProps.preTitle} />
        <Title variant="title2" forwardedAs="h2">
          {demoProps.title}
        </Title>
        <Description>{demoProps.description}</Description>
        <MobileSearchContainer>
          <InteractiveSearch searchStats={demoProps.searchStats} />
        </MobileSearchContainer>
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
