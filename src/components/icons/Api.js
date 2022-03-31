import * as React from 'react'

function SvgApi({ title, titleId, ...props }) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.707 6.293a1 1 0 010 1.414L5.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0zm4.586 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgApi
