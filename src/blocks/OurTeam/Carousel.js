import styled, { css, keyframes } from 'styled-components'
import get from 'utils/get'

const scrollRightToLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-50%);
}
`

const scrollLeftToRight = keyframes`
0% {
  transform: translateX(-50%);
}
100% {
  transform: translateX(0);
}
`

const Carousel = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${p => p.$nbSlides}, 1fr);
  grid-gap: 0 26px;
  justify-content: center;
  align-items: flex-start;
  &:hover {
    animation-play-state: paused;
  }

  ${p =>
    p.$dir === 'ltr' &&
    css`
      animation: ${scrollLeftToRight} 50s linear infinite;
    `}
  ${p =>
    p.$dir === 'rtl' &&
    css`
      animation: ${scrollRightToLeft} 50s linear infinite;
    `}

  // Number of cards * width + gutter
  width: calc(${p => p.$nbSlides} * 112px + ${p => p.$nbSlides - 1} * 26px);
  @media (min-width: ${get('breakpoints.md')}) {
    width: calc(${p => p.$nbSlides} * 152px + ${p => p.$nbSlides - 1} * 26px);
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: calc(${p => p.$nbSlides} * 190px + ${p => p.$nbSlides - 1} * 26px);
  }
`

export default Carousel
