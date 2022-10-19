import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Card from 'components/Card'
import RoundedIcon from 'components/RoundedIcon'

const OpenSourceWrapper = styled(Grid)`
  grid-template-columns: 1fr;
  margin-top: 18px;
`

const Col = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const PreTitle = styled(Typography)`
  color: ${get('colors.dodgerBlue.400')};
  margin-top: 4px;
  font-weight: ${get('fontWeight.semibold')};
`

const Title = styled(Typography)`
  color: white;
  margin-top: 4px;
`

const SecondColumn = styled(Col)`
  grid-column: span 6;
`

const LastColumn = styled(Col)`
  align-items: flex-start;

  @media (min-width: ${get('breakpoints.md')}) {
    align-items: flex-end;
  }
`

const Description = styled(Typography)`
  color: ${get('colors.ashes.100')};
`

const ReadMore = styled(Typography)`
  color: ${get('colors.ashes.100')};
  margin-top: 12px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 18px;
  }

  a {
    color: ${get('colors.dodgerBlue.400')};
    text-decoration: underline;
    transition: color 300ms;

    &:hover,
    &:focus {
      color: ${get('colors.dodgerBlue')};
    }
  }
`

const OpenSource = ({ openSource }) => {
  return (
    <OpenSourceWrapper>
      <Card $bgColor="colors.valhalla.600">
        <Grid>
          <Col>
            <RoundedIcon icon={openSource.icon} color="colors.dodgerBlue.400" />
            <PreTitle variant="body.m.bold">{openSource.preTitle}</PreTitle>
            <Title variant="title.xs">{openSource.title}</Title>
          </Col>
          <SecondColumn>
            <Description variant="body.xs.default">
              {openSource.description}
            </Description>
            <ReadMore
              variant="body.xs.default"
              dangerouslySetInnerHTML={{ __html: openSource.readMore }}
            />
          </SecondColumn>
          <LastColumn>
            <Button
              variant="secondary"
              color={get('colors.white')}
              href={openSource.cta.href}
              target={openSource.cta.target}
            >
              <Typography variant="body.s.bold">
                {openSource.cta.title}
              </Typography>
            </Button>
          </LastColumn>
        </Grid>
      </Card>
    </OpenSourceWrapper>
  )
}

export default OpenSource
