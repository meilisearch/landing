import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Grid from 'components/Grid'
import TableComponent from 'components/Table'
import Anchor from 'components/Anchor'

const TableSection = styled.section`
  background-color: ${get('colors.valhalla')};
  padding: 60px 16px 72px;
  color: ${get('colors.white')};
  margin: 0 -16px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 72px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 125px 32px 150px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 120px 32px;
  }
`

const Content = styled.div`
  z-index: 2;
  position: relative;
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 2 / 12;
    padding: 0 8px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 0 48px;
  }
`

const Title = styled(Typography)`
  display: block;
  text-align: center;
`

const Tables = styled.div`
  margin-top: 56px;
  table + table {
    margin-top: 28px;
  }
  a {
    cursor: pointer;
  }

  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 72px;
    table + table {
      margin-top: 32px;
    }
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 92px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 120px;
  }
`

const Decorator1 = styled.div`
  background: url(images/decorator1.svg) no-repeat;
  background-size: contain;
  position: absolute;
  top: 984px;
  right: 0;
  bottom: 0;
  left: -425px;
  width: 706px;
  height: 704px;
  @media (min-width: ${get('breakpoints.lg')}) {
    top: 1018px;
    left: -332px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    top: 665px;
    left: -316px;
  }
`

const Decorator2 = styled.div`
  background: url(images/decorator7.svg) no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 120px;
  right: -158px;
  width: 471px;
  height: 600px;
  @media (min-width: ${get('breakpoints.lg')}) {
    bottom: 221px;
    right: -166px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    bottom: 252px;
    right: -178px;
  }
`

const Table = ({ table, ...props }) => {
  return (
    <TableSection {...props}>
      <Grid style={{ position: 'relative' }}>
        <Content>
          <Anchor id="open-source-vs-cloud" />
          <Title variant="title.m" forwardedAs="h2">
            {table.title}
          </Title>
          <Tables>
            {table.tables.map((t, index) => (
              <TableComponent key={index} table={t} />
            ))}
          </Tables>
        </Content>
        <Decorator1 />
        <Decorator2 />
      </Grid>
    </TableSection>
  )
}

export default Table
