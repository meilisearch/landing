import * as React from 'react'
const SvgStar = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m6.065 8.208-3.396 1.945.923-3.63L.57 4.098l3.967-.298L6.065.354l1.528 3.445 3.967.298-3.022 2.427.923 3.629-3.396-1.945Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgStar
