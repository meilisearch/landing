import styled from 'styled-components'
import get from 'utils/get'

const Card = styled.div`
  background-color: ${p => get(p.$bgColor || 'colors.valhalla.700')};
  border-radius: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
`

export default Card
