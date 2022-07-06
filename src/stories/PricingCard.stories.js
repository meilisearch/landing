import React from 'react'
import PricingCard from 'components/PricingCard'
import Typography from 'components/Typography'
import get from 'utils/get'
import { darken } from 'utils/colors'

export default {
  title: 'Components/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  return (
    <PricingCard>
      <PricingCard.Header>
        <Typography variant="title.m">Open Source</Typography>
      </PricingCard.Header>
      <PricingCard.Body>
        <Typography>
          I love cheese, especially everyone loves smelly cheese. Port-salut
          taleggio cheese on toast blue castello st. agur blue cheese paneer
          roquefort bocconcini. Parmesan ricotta queso cheese and biscuits
          emmental cheesecake fondue hard cheese. Paneer queso macaroni cheese
          rubber cheese smelly cheese emmental babybel bocconcini. Edam.
        </Typography>
      </PricingCard.Body>
    </PricingCard>
  )
}

export const OtherColor = () => {
  return (
    <PricingCard>
      <PricingCard.Header $color={darken(get('colors.dodgerBlue'), 60)}>
        <Typography variant="title.m">Open Source</Typography>
      </PricingCard.Header>
      <PricingCard.Body>
        <Typography>
          I love cheese, especially everyone loves smelly cheese. Port-salut
          taleggio cheese on toast blue castello st. agur blue cheese paneer
          roquefort bocconcini. Parmesan ricotta queso cheese and biscuits
          emmental cheesecake fondue hard cheese. Paneer queso macaroni cheese
          rubber cheese smelly cheese emmental babybel bocconcini. Edam.
        </Typography>
      </PricingCard.Body>
    </PricingCard>
  )
}
