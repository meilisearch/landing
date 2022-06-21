import Typography from 'components/Typography'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  padding: 8px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FullWidthCard = ({ title, ...props }) => {
  return (
    <Card {...props}>
      <Typography variant="body.xs.default">{title}</Typography>
    </Card>
  )
}

export default FullWidthCard
