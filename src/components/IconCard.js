import Typography from 'components/Typography'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
`

const Title = styled(Typography)`
  display: block;
  text-align: center;
`

const IconCard = ({ icon, title, ...props }) => {
  const Icon = icon
  return (
    <Card {...props}>
      <Icon width={55} height={55} />
      <Title variant="body.xs.default">{title}</Title>
    </Card>
  )
}

export default IconCard
