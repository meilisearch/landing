import * as React from 'react'

function SvgIncluded({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.878 20.607A9.166 9.166 0 012.71 11.44a9.166 9.166 0 019.167-9.167 9.166 9.166 0 019.166 9.167 9.166 9.166 0 01-9.166 9.167zm-.914-5.5l6.48-6.482-1.296-1.296-5.184 5.185L8.37 9.921l-1.296 1.296 3.89 3.89z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgIncluded
