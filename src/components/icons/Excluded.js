import * as React from 'react'
const SvgExcluded = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.842 20.607a9.166 9.166 0 0 1-9.166-9.167 9.166 9.166 0 0 1 9.166-9.167 9.166 9.166 0 0 1 9.167 9.167 9.166 9.166 0 0 1-9.167 9.167Zm0-10.463L9.25 7.55 7.953 8.848l2.593 2.592-2.593 2.592L9.25 15.33l2.592-2.593 2.593 2.593 1.297-1.297-2.593-2.592 2.593-2.592-1.297-1.298-2.593 2.594Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgExcluded
