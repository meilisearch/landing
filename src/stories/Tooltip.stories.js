import React from 'react'
import Typography from '../components/Typography'
import Tooltip from 'components/Tooltip'

export default {
  title: 'Components/Tooltip',
  decorators: [
    Story => (
      <div
        style={{
          paddingTop: 100,
          paddingLeft: 100,
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <Tooltip title="I'm the Tooltip's content">
    <button>
      <Typography>Hover me!</Typography>
    </button>
  </Tooltip>
)
