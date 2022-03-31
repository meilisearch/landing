import * as React from 'react'

function SvgGuides({ title, titleId, ...props }) {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm15.95-4.95a1 1 0 010 1.414l-3.018 3.018a2 2 0 01-2.45 2.45L8.464 16.95a1 1 0 01-1.414-1.414l3.018-3.018a2 2 0 012.45-2.45l3.018-3.018a1 1 0 011.414 0zM7 12a1 1 0 11-2 0 1 1 0 012 0zm11 1a1 1 0 100-2 1 1 0 000 2zm-5 5a1 1 0 11-2 0 1 1 0 012 0zM12 7a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGuides
