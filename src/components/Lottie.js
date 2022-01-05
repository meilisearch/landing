import React from 'react'
import styled from 'styled-components'
import BaseLottie from 'react-lottie'

const Lottie = styled(BaseLottie)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`

const LottieAnimation = ({ animation, options = {}, ...props }) => {
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
    <Lottie options={lottieOptions} height="100%" width="100%" {...props} />
  )
}

export default LottieAnimation
