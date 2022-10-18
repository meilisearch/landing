import * as React from 'react'

function SvgExcluded({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.842 20.607a9.166 9.166 0 01-9.166-9.167 9.166 9.166 0 019.166-9.167 9.166 9.166 0 019.167 9.167 9.166 9.166 0 01-9.167 9.167zm0-10.463L9.25 7.55 7.953 8.848l2.593 2.592-2.593 2.592L9.25 15.33l2.592-2.593 2.593 2.593 1.297-1.297-2.593-2.592 2.593-2.592-1.297-1.298-2.593 2.594z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgExcluded
