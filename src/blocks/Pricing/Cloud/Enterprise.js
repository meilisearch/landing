import React from 'react'
import styled from 'styled-components'
import List from 'components/List'
import Button from 'components/Button'
import Typography from 'components/Typography'
import get from 'utils/get'

const Title = styled(Typography)`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: block;
  }
`

const EnterprisePlan = ({ enterprisePlan }) => {
  return (
    <>
      <div>
        <Title variant="title.xs">{enterprisePlan.title}</Title>
        <Typography style={{ marginTop: 16, opacity: 0.9 }}>
          {enterprisePlan.description}
        </Typography>
        <List style={{ marginTop: 26 }}>
          {enterprisePlan.keypoints.map((keypoint, index) => (
            <List.Element key={index} style={{ marginTop: 12 }}>
              <Typography variant="body.s.default">{keypoint}</Typography>
            </List.Element>
          ))}
        </List>
      </div>
      <Button
        href={enterprisePlan.cta.href}
        target={enterprisePlan.cta.target}
        style={{ marginTop: 48 }}
        // eslint-disable-next-line no-undef
        onClick={() => $crisp.push(['do', 'chat:open'])}
      >
        <Typography variant="body.s.bold">
          {enterprisePlan.cta.title}
        </Typography>
      </Button>
    </>
  )
}

export default EnterprisePlan
