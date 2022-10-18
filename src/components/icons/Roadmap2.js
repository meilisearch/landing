import * as React from 'react'
const SvgRoadmap2 = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1ZM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgRoadmap2
