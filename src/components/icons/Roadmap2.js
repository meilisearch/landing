import * as React from 'react'

function SvgRoadmap2({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M13 8v8a3 3 0 01-3 3H7.83a3.001 3.001 0 110-2H10a1 1 0 001-1V8a3 3 0 013-3h3V2l5 4-5 4V7h-3a1 1 0 00-1 1zM5 19a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgRoadmap2
