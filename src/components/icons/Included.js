import * as React from 'react'
const SvgIncluded = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.878 20.607A9.166 9.166 0 0 1 2.71 11.44a9.166 9.166 0 0 1 9.167-9.167 9.166 9.166 0 0 1 9.166 9.167 9.166 9.166 0 0 1-9.166 9.167Zm-.914-5.5 6.48-6.482-1.296-1.296-5.184 5.185L8.37 9.921l-1.296 1.296 3.89 3.89Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgIncluded
