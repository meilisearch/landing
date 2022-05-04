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
  background-color: ${get('colors.white')};
  border-radius: 8px;
  padding: 12px 10px;
  color: ${get('colors.valhalla.100')};
`

function Tooltip({ children, title, ...props }) {
  const tooltip = useTooltipState({ placement: 'bottom' })
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
