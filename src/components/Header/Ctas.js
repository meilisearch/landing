import React from 'react'
import Typography from 'components/Typography'
import Button from 'components/Button'
import get from 'utils/get'

const Ctas = ({ headerProps, ...props }) => {
  const { cta1, cta2 } = headerProps
  return (
    <div {...props}>
      <Button
        href={cta1.href}
        color={get('colors.hotPink')}
        variant="secondary"
      >
        <Typography variant="ctaBig">{cta1.title}</Typography>
      </Button>
      <Button
        href={cta2.href}
        color={get('colors.hotPink')}
        style={{ marginLeft: 24 }}
      >
        <Typography variant="ctaBig">{cta2.title}</Typography>
      </Button>
    </div>
  )
}

export default Ctas
