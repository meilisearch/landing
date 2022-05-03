import React from 'react'
import Typography from 'components/Typography'
import Button from 'components/Button'
import List from 'components/List'
import Tooltip from 'components/Tooltip'

const Basic = ({ dedicatedPlan }) => {
  return (
    <>
      <Typography style={{ marginTop: 22, opacity: 0.9 }}>
        <span dangerouslySetInnerHTML={{ __html: dedicatedPlan.description }} />
        <Tooltip title={dedicatedPlan.tooltip.text}>
          <button>
            <Typography>{dedicatedPlan.tooltip.cta}</Typography>
          </button>
        </Tooltip>
      </Typography>
      <List style={{ marginTop: 16 }}>
        {dedicatedPlan.keypoints.map((keypoint, index) => (
          <List.Element key={index} style={{ marginTop: 10 }}>
            <Typography variant="body.s.default">{keypoint}</Typography>
          </List.Element>
        ))}
      </List>
      <Button
        href={dedicatedPlan.cta.href}
        target={dedicatedPlan.cta.target}
        style={{ marginTop: 18 }}
      >
        <Typography variant="body.s.bold">{dedicatedPlan.cta.title}</Typography>
      </Button>
    </>
  )
}

export default Basic
