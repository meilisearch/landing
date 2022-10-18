import * as React from 'react'
const SvgOther = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      x={9.517}
      y={10.109}
      width={15.532}
      height={15.085}
      rx={3}
      stroke="#705B8C"
      strokeWidth={1.5}
    />
    <rect
      x={9.517}
      y={31.673}
      width={15.532}
      height={15.085}
      rx={3}
      stroke="#EDEEF7"
      strokeWidth={1.5}
    />
    <rect
      x={31.512}
      y={10.109}
      width={15.532}
      height={15.085}
      rx={3}
      stroke="#EDEEF7"
      strokeWidth={1.5}
    />
    <rect
      x={31.512}
      y={31.673}
      width={15.532}
      height={15.085}
      rx={3}
      stroke="#EDEEF7"
      strokeWidth={1.5}
    />
  </svg>
)
export default SvgOther
