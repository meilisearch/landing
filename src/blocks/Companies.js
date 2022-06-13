import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Grid from 'components/Grid'

const Section = styled.section`
  background-color: ${get('colors.valhalla.700')};
  margin-left: -16px;
  margin-right: -16px;
  padding: 32px 24px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-left: -32px;
    margin-right: -32px;
    padding: 56px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 62px 32px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 104px 0 142px;
  }
`

const Title = styled(Typography)`
  color: ${get('colors.ashes.900')};
  width: 100%;
  text-align: center;
`

const CompaniesList = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 16px;
  margin-top: 48px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px 16px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 72px;
    grid-gap: 40px 16px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-gap: 48px 16px;
  }
`

const Companies = ({ companiesProps, ...props }) => {
  return (
    <Section {...props}>
      <Title variant="title.caps">{companiesProps.title}</Title>
      <CompaniesList>
        {companiesProps.companies.map(company => {
          const Icon = company.icon
          return <Icon key={company.title} title={company.title} />
        })}
      </CompaniesList>
    </Section>
  )
}

export default Companies
