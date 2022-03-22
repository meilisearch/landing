import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import { Included, Excluded } from 'components/icons'

const Table = styled.table`
  width: 100%;
  color: ${get('colors.valhalla.100')};
  border-radius: 8px;
  border: 1px solid ${get('colors.valhalla.400')};
  padding: 12px 12px 0 12px;
  background-color: ${get('colors.valhalla.700')};
  display: table;
  border-spacing: 0;

  tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`

const Thead = styled.thead`
  width: 100%;
  tr > th:first-child {
    color: ${get('colors.hotPink')};
    text-align: left;
  }
`
const Tr = styled.tr`
  height: 64px;
  th:first-child {
    width: 50%;
  }
  td:first-child {
    width: 50%;
  }
  th:nth-child(n + 2) {
    width: 25%;
    text-align: center;
  }
  td:nth-child(n + 2) {
    width: 25%;
    text-align: center;
  }
`
const Th = styled.th`
  text-transform: uppercase;
  padding: 0 4px 0 0;
`

const Tbody = styled.tbody`
  width: 100%;
  tr + tr > td {
    border-top: 1px solid ${get('colors.valhalla.400')};
  }
  td {
    padding: 22px 4px;
    margin-left: -4px;
  }
  tr:first-child > td {
    padding-top: 32px;
  }
  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: #FF5CAA;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
  }
`

const Td = styled.td`
  a {
    color: ${get('colors.hotPink')};
    text-decoration: underline;
    font-weight: ${get('fontWeight.semibold')};
  }
`

const InfoText = styled(Typography)`
  color: ${get('colors.valhalla.200')};
`

const Info = ({ info }) => {
  if (typeof info === 'string' || info instanceof String) {
    return (
      <InfoText
        variant="copySmall"
        dangerouslySetInnerHTML={{ __html: info }}
      />
    )
  }
  if (typeof info == 'boolean' && info === true) {
    return <Included width={22} color={get('colors.hotPink')} />
  }
  return <Excluded width={22} color={get('colors.valhalla.400')} />
}

const TableComponent = ({ table }) => (
  <Table>
    <Thead>
      <Tr>
        {table.thead.map((thead, index) => (
          <Th key={index}>
            <Typography variant="preTitle">{thead}</Typography>
          </Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {table.tbody.map((tbody, index) => (
        <Tr key={index}>
          <Td>
            <Typography variant="copy">{tbody.title}</Typography>
          </Td>
          <Td>
            <Info info={tbody.openSource} />
          </Td>
          <Td>
            <Info info={tbody.cloud} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default TableComponent
