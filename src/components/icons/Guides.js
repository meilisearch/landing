import * as React from 'react'

function SvgGuides({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.086 3.664a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3h-14a3 3 0 01-3-3v-14zm3-1a1 1 0 00-1 1v5h16v-5a1 1 0 00-1-1h-14zm-1 8v7a1 1 0 001 1h14a1 1 0 001-1v-7h-16zm10 1a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414l-3.293-3.293-2.293 2.293-1 1a1 1 0 01-1.414-1.414l.293-.293-.586-.586-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l1.293 1.293 2.293-2.293a1 1 0 01.707-.293zm-3-6a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm-4 1.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGuides
