import React from 'react'
import styled from 'styled-components'
import {
  useTooltipState,
  Tooltip as ReakitTooltip,
  TooltipReference as ReakitTooltipReference,
} from 'reakit/Tooltip'
import Typography from './Typography'
import get from 'utils/get'

const TooltipReference = styled(ReakitTooltipReference)`
  background-color: transparent;
  border: 0;
  color: inherit;
  border-bottom: 1px dashed ${get('colors.white')};
  padding: 0;
`

const TextContainer = styled.div`
  background-color: ${get('colors.valhalla.600')};
  padding: 12px 8px;
  border-radius: 8px;
  color: ${get('colors.white')};
  border: 1px solid ${get('colors.valhalla.100')};
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  opacity: 0;
  transform-origin: top center;
  transform: translate3d(0, -20px, 0);
  [data-enter] & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

function Tooltip({ children, title, ...props }) {
  const tooltip = useTooltipState({ animated: 150 })
  return (
    <>
      <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
        {referenceProps => React.cloneElement(children, referenceProps)}
      </TooltipReference>

      <ReakitTooltip {...tooltip} {...props}>
        <TextContainer>
          <Typography>{title}</Typography>
        </TextContainer>
      </ReakitTooltip>
    </>
  )
}
export default Tooltip
