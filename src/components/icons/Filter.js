import * as React from 'react'
const SvgFilter = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 25 25"
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
      d="M3.125 7.292A1.042 1.042 0 0 1 4.167 6.25h16.666a1.042 1.042 0 1 1 0 2.083H4.167a1.042 1.042 0 0 1-1.042-1.041ZM6.25 12.5a1.042 1.042 0 0 1 1.042-1.042h10.416a1.042 1.042 0 0 1 0 2.084H7.292A1.042 1.042 0 0 1 6.25 12.5Zm3.125 5.208a1.042 1.042 0 0 1 1.042-1.041h4.166a1.041 1.041 0 1 1 0 2.083h-4.166a1.041 1.041 0 0 1-1.042-1.042Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgFilter
