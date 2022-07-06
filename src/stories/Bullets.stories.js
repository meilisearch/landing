import React from 'react'
import Bullets from 'components/Bullets'
import get from 'utils/get'
import Button from 'components/Button'

export default {
  title: 'Components/Bullets',
  component: Bullets,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const [index, setIndex] = React.useState(0)
  const nbBullets = 6
  return (
    <>
      <Bullets
        currentIndex={index}
        nbBullets={nbBullets}
        color={get('colors.dodgerBlue')}
      />
      {index < nbBullets - 1 && (
        <Button
          onClick={() => setIndex(prevIndex => prevIndex + 1)}
        >{`Go to step ${index + 2}`}</Button>
      )}
    </>
  )
}
