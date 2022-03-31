import BaseGrid from 'components/Grid'
import Typography from 'components/Typography'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Button from 'components/Button'
import List from 'components/List'

const Grid = styled(BaseGrid)`
  margin-top: 72px;
  padding-botton: 76px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 120px;
    padding-bottom: 112px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding-bottom: 192px;
  }
`

const Illustration = styled.div`
  grid-column: 1 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 6;
  }
`

const Content = styled.div`
  color: ${get('colors.white')};
  grid-column: 7 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  padding: 32px;
`

const DocumentationCard = styled(Card)`
  margin-top: 20px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 56px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 48px;
  }
`

const Documentation = ({ developerProps }) => {
  const { documentationCta: cta } = developerProps
  return (
    <div>
      <DocumentationCard>
        <Typography variant="title3">{developerProps.documentation}</Typography>
        <Typography
          variant="small"
          color={get('colors.ashes.600')}
          style={{ marginTop: 24 }}
        >
          {developerProps.documentationText}
        </Typography>
        <Button href={cta.href} target={cta.target} style={{ marginTop: 24 }}>
          <Typography variant="ctaBig">{cta.title}</Typography>
        </Button>
      </DocumentationCard>
    </div>
  )
}

const DeveloperHubCard = styled(Card)`
  margin-top: 56px;
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 48px;
  }
`

const DeveloperHub = ({ developerProps }) => {
  return (
    <div>
      <DeveloperHubCard>
        <Typography variant="title3">{developerProps.developerHub}</Typography>
        <Typography
          variant="small"
          color={get('colors.ashes.600')}
          style={{ marginTop: 24 }}
        >
          {developerProps.developerHubText}
        </Typography>
        <List>
          {developerProps.developerHubList.map((elem, index) => (
            <List.Element key={index}>
              <Typography variant="small" color={get('colors.ashes.600')}>
                {elem}
              </Typography>
            </List.Element>
          ))}
        </List>
        <Button
          disabled
          color={get('colors.valhalla.300')}
          style={{ marginTop: 24 }}
        >
          <Typography variant="ctaBig" color={get('colors.ashes.900')}>
            {developerProps.comingSoon}
          </Typography>
        </Button>
      </DeveloperHubCard>
    </div>
  )
}

const Text = ({ developerProps }) => {
  return (
    <Grid>
      <Illustration>
        <div style={{ width: '100%', height: 'auto' }}>
          <Image
            src={developerProps.image}
            height={749}
            width={330}
            layout="responsive"
            alt="Developer"
          />
        </div>
      </Illustration>
      <Content>
        <Typography variant="typo4">{developerProps.description}</Typography>
        <Documentation developerProps={developerProps} />
        <DeveloperHub developerProps={developerProps} />
      </Content>
    </Grid>
  )
}

export default Text
