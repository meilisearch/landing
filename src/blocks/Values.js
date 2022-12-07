import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Card from 'components/Card'
import get from 'utils/get'
import hexToRgb from 'utils/hexToRgb'

const Section = styled.section`
  background-color: ${get('colors.valhalla.700')};
  margin: 0 -16px;
  padding: 72px 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 88px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const Content = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`

const Title = styled(Typography)`
  color: white;
  margin-top: 4px;
`

const Cta = styled(Button)`
  margin-top: 20px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: ${get('breakpoints.md')}) {
    flex-direction: row;
    align-items: center;
  }
`

const ValuesList = styled.div`
  margin-top: 2px;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const SubGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  padding: 0 16px 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const ValueCard = styled(Card)`
  border: 2px solid ${p => get(p.$color)};
  background-color: ${p => hexToRgb(get(p.$color), 0.2)};
  justify-content: flex-start;
  min-width: 268px;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: span 4;
    min-width: unset;
    width: 100%;
  }
`

const ValuesGroup = styled.div`
  margin: 24px -16px 0;
  @media (min-width: ${get('breakpoints.md')}) {
    margin: 56px -16px 0;
  }
`

const SecondaryGrid = styled(Grid)`
  @media (max-width: ${get('breakpoints.md')}) {
    max-width: unset;
  }
`

const Values = ({ values, ...props }) => {
  return (
    <Section {...props}>
      <Grid>
        <Content>
          <PreTitle preTitle={values.preTitle} color={get('colors.hotPink')} />
          <TitleSection>
            <Title variant="title.m" forwardedAs="h2">
              {values.title}
            </Title>
            <Cta
              variant="secondary"
              color={get('colors.white')}
              href={values.cta.href}
              target={values.cta.target}
            >
              <Typography variant="body.s.bold">{values.cta.title}</Typography>
            </Cta>
          </TitleSection>
        </Content>
      </Grid>
      <SecondaryGrid>
        <ValuesList>
          {values.group.map(group => (
            <ValuesGroup key={group.title}>
              <Typography
                variant="title.xs"
                style={{ color: 'white', padding: '0 16px' }}
              >
                {group.title}
              </Typography>
              <SubGrid>
                {group.values.map(value => (
                  <ValueCard $color={group.color} key={value.title}>
                    <Typography
                      variant="body.l.bold"
                      style={{
                        color: get('colors.ashes.100'),
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body.s.default"
                      style={{ color: get('colors.ashes'), marginTop: 8 }}
                    >
                      {value.description}
                    </Typography>
                  </ValueCard>
                ))}
              </SubGrid>
            </ValuesGroup>
          ))}
        </ValuesList>
      </SecondaryGrid>
    </Section>
  )
}

export default Values
