import styled, { css } from 'styled-components'
import { Disclosure as DisclosureButton } from 'reakit/Disclosure'
import { Arrow } from 'components/icons'

const StyledDisclosureButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
`

const StyledArrow = styled(Arrow)`
  margin-left: 10px;
  transform: rotate(180deg);
  transition: transform 300ms;
  height: 8px;
  stroke: currentColor;

  ${p =>
    p.$visible &&
    css`
      transform: rotate(0deg);
    `};
`

const Disclosure = ({ children, ...props }) => (
  <DisclosureButton as={StyledDisclosureButton} {...props}>
    {children}
    <StyledArrow $visible={props.visible} />
  </DisclosureButton>
)

export default Disclosure
