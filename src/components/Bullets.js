import React from 'react'
import styled, { css } from 'styled-components'
import hexToRgb from 'utils/hexToRgb'
import getColorName from 'utils/getColorName'
import get from 'utils/get'

const Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: background-color 300ms;

  ${p =>
    p.$index < p.$currentIndex &&
    css`
      background-color: ${hexToRgb(
        get(`colors.${getColorName(p.$color)}`),
        0.6
      )};
    `}
  ${p =>
    p.$index === p.$currentIndex &&
    css`
      background-color: ${p.$color};
    `}
    ${p =>
    p.$index > p.$currentIndex &&
    css`
      background-color: ${hexToRgb(get(`colors.valhalla.100`), 0.4)};
    `};
`

const Bullets = ({ currentIndex, nbBullets, color, ...props }) => {
  return (
    <div {...props}>
      {[...Array(nbBullets)].map((e, i) => (
        <Bullet
          key={i}
          $color={color}
          $currentIndex={currentIndex}
          $index={i}
        />
      ))}
    </div>
  )
}

export default Bullets
