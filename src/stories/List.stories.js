import React from 'react'
import Typography from 'components/Typography'
import List from 'components/List'
import get from 'utils/get'

export default {
  title: 'Components/List',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => (
  <List>
    <List.Element>
      <Typography variant="small">Release notes</Typography>
    </List.Element>
    <List.Element>
      <Typography variant="small">Demos</Typography>
    </List.Element>
    <List.Element>
      <Typography variant="small">Integrations</Typography>
    </List.Element>
  </List>
)

const PinkLi = props => (
  <List.Element {...props} bulletColor={get('colors.hotPink')} />
)

export const HotPink = () => (
  <List>
    <PinkLi>
      <Typography variant="small">Release notes</Typography>
    </PinkLi>
    <PinkLi>
      <Typography variant="small">Demos</Typography>
    </PinkLi>
    <PinkLi>
      <Typography variant="small">Integrations</Typography>
    </PinkLi>
  </List>
)
