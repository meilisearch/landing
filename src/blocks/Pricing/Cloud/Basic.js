import React from 'react'
import styled from 'styled-components'
import Tag from 'components/Tag'
import Typography from 'components/Typography'
import Button from 'components/Button'
import get from 'utils/get'

const Resource = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Resources = styled.div`
  margin-top: 22px;
  width: 100%;
  > div + div {
    margin-top: 16px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    > div + div {
      margin-top: 23px;
    }
  }
`

const Basic = ({ basicPlan }) => {
  return (
    <>
      <Resources>
        {basicPlan.resources.map((resource, index) => (
          <Resource key={index}>
            <Typography variant="body.s.default">{resource.title}</Typography>
            <Tag>{resource.price}</Tag>
          </Resource>
        ))}
      </Resources>
      <Button
        style={{ marginTop: 26 }}
        href={basicPlan.cta.href}
        target={basicPlan.cta.target}
      >
        <Typography variant="body.s.bold">{basicPlan.cta.title}</Typography>
      </Button>
    </>
  )
}

export default Basic
