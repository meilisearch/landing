import * as React from 'react'

function SvgSortBy({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.292 5.208a1.042 1.042 0 10-2.084 0v12.069L3.862 15.93a1.042 1.042 0 00-1.473 1.473l3.125 3.125a1.042 1.042 0 001.473 0l3.124-3.125A1.041 1.041 0 008.64 15.93l-1.347 1.347V5.208zm6.25 1.042a1.042 1.042 0 000 2.083h8.333a1.042 1.042 0 000-2.083h-8.333zm0 5.208a1.041 1.041 0 100 2.083h4.166a1.042 1.042 0 100-2.083h-4.166zm0 5.208a1.041 1.041 0 100 2.084h1.041a1.042 1.042 0 100-2.084h-1.041z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgSortBy
