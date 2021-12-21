import * as React from 'react'

function SvgRoadmap({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.086 6.664v8a3 3 0 01-3 3h-2.17a3 3 0 110-2h2.17a1 1 0 001-1v-8a3 3 0 013-3h3v-3l5 4-5 4v-3h-3a1 1 0 00-1 1zm-8 11a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgRoadmap
