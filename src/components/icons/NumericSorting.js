import * as React from 'react'
const SvgNumericSorting = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18.885 15.583h27.112"
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.885 25.242h27.112"
      stroke="#705B8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.885 34.9h24.291M18.885 20.413H44.14"
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.885 30.07h22.31M18.885 39.73h26.216"
      stroke="#705B8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.747 34.773h3.321a.26.26 0 0 1 .26.26v1.743a1 1 0 0 1-1 1h-1.667l1.678.018a1 1 0 0 1 .99 1v1.772a.26.26 0 0 1-.26.26H9.746M9.85 14.488h1.6a.26.26 0 0 1 .26.26v5.663m-1.378 0h2.893M9.781 24.7h3.253a.26.26 0 0 1 .26.26v2.303a.26.26 0 0 1-.26.26H10.04a.26.26 0 0 0-.26.26v2.442c0 .144.116.26.26.26h3.253"
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgNumericSorting
