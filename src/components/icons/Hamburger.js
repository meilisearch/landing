import * as React from 'react'

function SvgHamburger({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 .118a1 1 0 000 2h16a1 1 0 100-2H1zm-1 7a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgHamburger
