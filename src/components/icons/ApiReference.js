import * as React from 'react'

function SvgApiReference({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.086 1.664a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 11-2 0v-1h-6v13h2a1 1 0 110 2h-6a1 1 0 010-2h2v-13h-6v1a1 1 0 01-2 0v-2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgApiReference
