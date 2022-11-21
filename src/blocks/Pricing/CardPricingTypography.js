import styled from 'styled-components'
import Typography from 'components/Typography'
import get from 'utils/get'

const CardPricingTypography = styled(Typography)`
  margin-top: 4px;
  white-space: pre;
  color: ${get('colors.ashes.900')};
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 12px;
  font-weight: ${get('fontWeight.normal')};
  line-height: 150%;

  strong {
    color: white;
    font-family: 'Poppins';
    font-weight: ${get('fontWeight.medium')};
    font-size: 18px;
    line-height: 140%;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 13px;
    strong {
      font-size: 22px;
    }
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    font-size: 14px;
    strong {
      font-size: 26px;
    }
  }
`
export default CardPricingTypography
