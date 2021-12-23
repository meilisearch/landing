import styled, { css } from 'styled-components'
import { Dialog as ReakitDialog } from 'reakit/Dialog'

const Content = styled.div`
  ${p =>
    p.$animated &&
    css`
      transition: opacity 300ms, transform 300ms;
      opacity: 0;
      transform-origin: top center;
      transform: translateY(-24px);
      &[data-enter] {
        opacity: 1;
        transform: translateY(0px);
      }
    `};
`

const DialogContent = props => (
  <ReakitDialog as={Content} $animated={props.animated} {...props} />
)

export default DialogContent
