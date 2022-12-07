import React from 'react'
import Lottie from 'react-lottie-wrapper'

const LottieAnimation = ({
  animation,
  options = {},
  ariaLabel,
  hideInPercy = true,
  ...props
}) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...options,
  }

  React.useEffect(() => {
    const lottie = document.querySelectorAll('div .hide-in-percy')
    for (let i = 0; i < lottie.length; i++) {
      lottie[i].removeAttribute('aria-label')
    }
  }, [])

  return (
    <Lottie
      options={lottieOptions}
      height="100%"
      width="100%"
      ariaLabel={ariaLabel}
      tabIndex={-1}
      className={hideInPercy ? 'hide-in-percy' : undefined}
      {...props}
    />
  )
}

export default LottieAnimation
