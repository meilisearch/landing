import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Card from 'components/Card'

const PricingCardWrapper = styled(Card)`
  border-style: solid;
  border-width: 1px;
  border-color: ${p => (p.$selected ? get(p.$color) : 'transparent')};
  background-color: ${get('colors.valhalla.600')};
  padding: 16px;
  transition: background-color 300ms, border-color 300ms;

  &:hover,
  &:focus {
    background-color: ${get('colors.valhalla.700')};
    border-color: ${p => get(p.$color)};
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 24px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 32px;
  }
`

const PricingCard = ({ color = 'colors.dodgerBlue', selected, ...props }) => {
  return <PricingCardWrapper $color={color} $selected={selected} {...props} />
}

export default PricingCard
