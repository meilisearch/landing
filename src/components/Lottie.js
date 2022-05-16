import React from 'react'
import Lottie from 'react-lottie-wrapper'

const LottieAnimation = ({ animation, options = {}, ariaLabel, ...props }) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...options,
  }
  return (
    <Lottie
      options={lottieOptions}
      height="100%"
      width="100%"
      ariaRole={null}
      ariaLabel={ariaLabel}
      tabIndex={-1}
      className="hide-in-percy"
      {...props}
    />
  )
}

export default LottieAnimation
