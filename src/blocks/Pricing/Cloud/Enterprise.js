import React from 'react'
import List from 'components/List'
import Button from 'components/Button'
import Typography from 'components/Typography'

const EnterprisePlan = ({ enterprisePlan }) => {
  return (
    <>
      <Typography style={{ marginTop: 22, opacity: 0.9 }}>
        {enterprisePlan.description}
      </Typography>
      <List style={{ marginTop: 16 }}>
        {enterprisePlan.keypoints.map((keypoint, index) => (
          <List.Element key={index} style={{ marginTop: 10 }}>
            <Typography variant="small">{keypoint}</Typography>
          </List.Element>
        ))}
      </List>
      <Button
        href={enterprisePlan.cta.href}
        target={enterprisePlan.cta.target}
        style={{ marginTop: 18 }}
      >
        <Typography variant="ctaBig">{enterprisePlan.cta.title}</Typography>
      </Button>
    </>
  )
}

export default EnterprisePlan
