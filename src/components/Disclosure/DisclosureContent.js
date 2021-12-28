import styled, { css } from 'styled-components'
import { DisclosureContent as ReakitDisclosureContent } from 'reakit/Disclosure'

const StyledDisclosureContent = styled.div`
  ${p =>
    p.$animated &&
    css`
      transition: opacity 300ms, transform 300ms;
      opacity: 0;
      transform-origin: top center;
      transform: translateY(-16px);
      &[data-enter] {
        opacity: 1;
        transform: translateY(0px);
      }
    `};
`

const DisclosureContent = props => (
  <ReakitDisclosureContent
    as={StyledDisclosureContent}
    $animated={props.animated}
    {...props}
  />
)

export default DisclosureContent
