import * as React from 'react'
const SvgLinkedin = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M7.652 5.936a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002Zm.06 3.48h-4v12.52h4V9.416Zm6.32 0h-3.98v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57h3.95v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgLinkedin
