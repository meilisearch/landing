import React from 'react'
import Typography from 'components/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
  },
  argTypes: {
    variant: {
      options: [
        'title.xl',
        'title.l',
        'title.m',
        'title.s',
        'title.xs',
        'title.caps',
        'body.l.default',
        'body.l.bold',
        'body.l.link',
        'body.m.default',
        'body.m.bold',
        'body.m.link',
        'body.s.default',
        'body.s.bold',
        'body.s.link',
      ],
      control: {
        type: 'select',
      },
    },
  },
}

const Template = args => <Typography {...args} />

export const TitleXl = Template.bind({})
TitleXl.storyName = 'title | XL'
TitleXl.args = {
  variant: 'title.xl',
  children: 'I’m the title.xl variant',
}

export const TitleL = Template.bind({})
TitleL.storyName = 'title | L'
TitleL.args = {
  variant: 'title.l',
  children: 'I’m the title.l variant',
}

export const TitleM = Template.bind({})
TitleM.storyName = 'title | M'
TitleM.args = {
  variant: 'title.m',
  children: 'I’m the title.m variant',
}

export const TitleS = Template.bind({})
TitleS.storyName = 'title | S'
TitleS.args = {
  variant: 'title.s',
  children: 'I’m the title.s variant',
}

export const TitleXS = Template.bind({})
TitleXS.storyName = 'title | XS'
TitleXS.args = {
  variant: 'title.xs',
  children: 'I’m the title.xs variant',
}

export const TitleCaps = Template.bind({})
TitleCaps.storyName = 'title | caps'
TitleCaps.args = {
  variant: 'title.caps',
  children: 'I’m the title.caps variant',
}

export const BodyLDefault = Template.bind({})
BodyLDefault.storyName = 'body | L | default'
BodyLDefault.args = {
  variant: 'body.l.default',
  children: 'I’m the body.l.default variant',
}

export const BodyLBold = Template.bind({})
BodyLBold.storyName = 'body | L | bold'
BodyLBold.args = {
  variant: 'body.l.bold',
  children: 'I’m the body.l.bold variant',
}

export const BodyLLink = Template.bind({})
BodyLLink.storyName = 'body | L | link'
BodyLLink.args = {
  variant: 'body.l.link',
  children: 'I’m the body.l.link variant',
}

export const BodyMDefault = Template.bind({})
BodyMDefault.storyName = 'body | M | default'
BodyMDefault.args = {
  variant: 'body.m.default',
  children: 'I’m the body.m.default variant',
}

export const BodyMBold = Template.bind({})
BodyMBold.storyName = 'body | M | bold'
BodyMBold.args = {
  variant: 'body.m.bold',
  children: 'I’m the body.m.bold variant',
}

export const BodyMLink = Template.bind({})
BodyMLink.storyName = 'body | M | link'
BodyMLink.args = {
  variant: 'body.m.link',
  children: 'I’m the body.m.link variant',
}

export const BodySDefault = Template.bind({})
BodySDefault.storyName = 'body | S | default'
BodySDefault.args = {
  variant: 'body.s.default',
  children: 'I’m the body.s.default variant',
}

export const BodySBold = Template.bind({})
BodySBold.storyName = 'body | S | bold'
BodySBold.args = {
  variant: 'body.s.bold',
  children: 'I’m the body.s.bold variant',
}

export const BodySLink = Template.bind({})
BodySLink.storyName = 'body | S | link'
BodySLink.args = {
  variant: 'body.s.link',
  children: 'I’m the body.s.link variant',
}
