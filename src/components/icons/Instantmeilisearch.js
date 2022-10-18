import * as React from 'react'

function SvgInstantmeilisearch({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M5.483 36.382l7.212-18.452a6.78 6.78 0 016.314-4.312h4.348L16.145 32.07a6.78 6.78 0 01-6.314 4.312H5.483zM16.063 36.382l7.212-18.452a6.78 6.78 0 016.314-4.312h4.348L26.725 32.07a6.78 6.78 0 01-6.314 4.312h-4.348zM26.643 36.382l7.212-18.452a6.78 6.78 0 016.314-4.312h4.348L37.305 32.07a6.78 6.78 0 01-6.314 4.312h-4.348z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgInstantmeilisearch
