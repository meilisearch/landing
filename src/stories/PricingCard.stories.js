import React from 'react'
import PricingCard from 'components/PricingCard'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Components/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 250,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const {
    pricing: { payingPlans },
  } = getPricingPageData()

  return <PricingCard plan={payingPlans[0]} />
}
