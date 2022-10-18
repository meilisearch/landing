import * as React from 'react'
const SvgVue = ({ title, titleId, ...props }) => (
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
      d="M9.217 12.388 25 39.613l15.783-27.225H34.47L25 28.723l-9.548-16.335H9.217Z"
      fill="currentColor"
    />
    <path
      d="M15.45 12.387 25 28.8l9.469-16.414h-5.84L25 18.7l-3.709-6.313h-5.84Z"
      fill="currentColor"
      fillOpacity={0.6}
    />
  </svg>
)
export default SvgVue
