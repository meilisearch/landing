const lightenDarkenColor = (color, value) => {
  const num = parseInt(color.slice(1), 16)

  let red = (num >> 16) + value

  if (red > 255) red = 255
  else if (red < 0) red = 0

  let blue = ((num >> 8) & 0x00ff) + value

  if (blue > 255) blue = 255
  else if (blue < 0) blue = 0

  let green = (num & 0x0000ff) + value

  if (green > 255) green = 255
  else if (green < 0) green = 0

  return `#${String(
    '000000' + (green | (blue << 8) | (red << 16)).toString(16)
  ).slice(-6)}`
}

export const whiten = (color, value) => lightenDarkenColor(color, value)

export const darken = (color, value) => lightenDarkenColor(color, -value)
