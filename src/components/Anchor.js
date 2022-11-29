import styled from 'styled-components'

const Anchor = styled.div`
  display: block;
  position: relative;
  // Due to a big header on top of the page, the negative position is used to avoid the anchor being hidden under the header
  top: -200px;
  visibility: hidden;
`

export default Anchor
