import * as React from 'react'

function SvgCode({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.414 12.768a2 2 0 010 2.828l-8.586 8.586 8.586 8.586a2 2 0 01-2.828 2.828l-10-10a2 2 0 010-2.828l10-10a2 2 0 012.828 0zm9.172 0a2 2 0 012.828 0l10 10a2 2 0 010 2.828l-10 10a2 2 0 01-2.828-2.828l8.586-8.586-8.586-8.586a2 2 0 010-2.828z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgCode
