import * as React from 'react'

function SvgMagnifyingGlass({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12.371 12.012l5.63 5.63"
        stroke="currentColor"
        strokeWidth={2.754}
        strokeLinecap="round"
      />
      <circle
        r={5.568}
        transform="scale(-1 1) rotate(45 -13.579 -5.81)"
        stroke="currentColor"
        strokeWidth={2.754}
      />
    </svg>
  )
}

export default SvgMagnifyingGlass
