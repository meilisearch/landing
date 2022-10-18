import * as React from 'react'
const SvgInstantmeilisearch = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m5.483 36.382 7.212-18.452a6.78 6.78 0 0 1 6.314-4.312h4.348L16.145 32.07a6.78 6.78 0 0 1-6.314 4.312H5.483ZM16.063 36.382l7.212-18.452a6.78 6.78 0 0 1 6.314-4.312h4.348L26.725 32.07a6.78 6.78 0 0 1-6.314 4.312h-4.348ZM26.643 36.382l7.212-18.452a6.78 6.78 0 0 1 6.314-4.312h4.348L37.305 32.07a6.78 6.78 0 0 1-6.314 4.312h-4.348Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgInstantmeilisearch
