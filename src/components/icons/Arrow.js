import * as React from 'react'

function SvgArrow({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.527 1.2a.667.667 0 01.943 0l4.195 4.195L9.861 1.2a.666.666 0 11.942.942L6.137 6.81a.667.667 0 01-.943 0L.527 2.142a.667.667 0 010-.942z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgArrow
