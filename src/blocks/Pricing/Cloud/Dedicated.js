import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Button from 'components/Button'
import List from 'components/List'
import Tooltip from 'components/Tooltip'
import get from 'utils/get'

const Title = styled(Typography)`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: block;
  }
`

const Basic = ({ dedicatedPlan }) => {
  return (
    <>
      <div>
        <Title variant="title.xs">{dedicatedPlan.title}</Title>
        <Typography style={{ marginTop: 16, opacity: 0.9 }}>
          <span
            dangerouslySetInnerHTML={{ __html: dedicatedPlan.description }}
          />
          <Tooltip title={dedicatedPlan.tooltip.text}>
            <button>
              <Typography>{dedicatedPlan.tooltip.cta}</Typography>
            </button>
          </Tooltip>
        </Typography>
        <List style={{ marginTop: 26 }}>
          {dedicatedPlan.keypoints.map((keypoint, index) => (
            <List.Element key={index} style={{ marginTop: 12 }}>
              <Typography variant="body.s.default">{keypoint}</Typography>
            </List.Element>
          ))}
        </List>
      </div>
      <Button
        href={dedicatedPlan.cta.href}
        target={dedicatedPlan.cta.target}
        style={{ marginTop: 68 }}
      >
        <Typography variant="body.s.bold">{dedicatedPlan.cta.title}</Typography>
      </Button>
    </>
  )
}

export default Basic
