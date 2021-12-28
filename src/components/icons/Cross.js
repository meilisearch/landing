import * as React from 'react'

function SvgCross({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7.999 6.47L13.774.695l1.65 1.65L9.649 8.12l5.775 5.775-1.65 1.65L7.999 9.77l-5.775 5.775-1.65-1.65L6.35 8.12.574 2.345l1.65-1.65L7.999 6.47z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgCross
