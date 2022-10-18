import * as React from 'react'
const SvgBlog = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v5h16V5a1 1 0 0 0-1-1H5Zm-1 8v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7H4Zm10 1a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L14 15.414l-2.293 2.293-1 1a1 1 0 0 1-1.414-1.414L9.586 17 9 16.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0L11 15.586l2.293-2.293A1 1 0 0 1 14 13Zm-3-6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM7 8.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgBlog
