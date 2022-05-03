import * as React from 'react'

function SvgCross({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 5.41a1 1 0 011.414 0L12 10.705l5.293-5.293a1 1 0 111.414 1.414l-5.293 5.293 5.293 5.293a1 1 0 01-1.414 1.414L12 13.532l-5.293 5.293a1 1 0 01-1.414-1.414l5.293-5.293-5.293-5.293a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgCross
