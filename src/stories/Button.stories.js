import React from 'react'
import Button from 'components/Button'
import Typography from 'components/Typography'
import get from 'utils/get'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'small'],
      control: {
        type: 'select',
      },
    },
  },
}

const Template = args => <Button {...args} />

export const DodgerBlue = Template.bind({})
DodgerBlue.storyName = 'primary | dodgerBlue (default)'
DodgerBlue.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
}

export const HotPink = Template.bind({})
HotPink.storyName = 'primary | hotPink'
HotPink.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  color: get('colors.hotPink'),
}

export const Lila = Template.bind({})
Lila.storyName = 'primary | lila'
Lila.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  color: get('colors.lila'),
}

export const SecondaryHotPink = Template.bind({})
SecondaryHotPink.storyName = 'secondary | hotPink'
SecondaryHotPink.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  color: get('colors.hotPink'),
  variant: 'secondary',
}

export const SecondaryWhite = Template.bind({})
SecondaryWhite.storyName = 'secondary | white'
SecondaryWhite.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  color: get('colors.white'),
  variant: 'secondary',
}

export const Small = Template.bind({})
Small.storyName = 'size | small'
Small.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  size: 'small',
}

export const Link = Template.bind({})
Link.storyName = 'as link'
Link.args = {
  children: <Typography variant="body.s.bold">Log in</Typography>,
  href: '',
}
