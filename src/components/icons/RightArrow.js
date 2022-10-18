import * as React from 'react'
const SvgRightArrow = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.744 4.098a.833.833 0 0 1 1.178 0l5.834 5.833a.833.833 0 0 1 0 1.178l-5.834 5.833a.833.833 0 0 1-1.178-1.178l4.411-4.41H3.833a.834.834 0 0 1 0-1.667h11.322l-4.41-4.411a.833.833 0 0 1 0-1.178Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgRightArrow
