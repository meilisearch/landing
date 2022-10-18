import * as React from 'react'

function SvgFilter({ title, titleId, ...props }) {
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
        d="M3.125 7.292A1.042 1.042 0 014.167 6.25h16.666a1.042 1.042 0 110 2.083H4.167a1.042 1.042 0 01-1.042-1.041zM6.25 12.5a1.042 1.042 0 011.042-1.042h10.416a1.042 1.042 0 010 2.084H7.292A1.042 1.042 0 016.25 12.5zm3.125 5.208a1.042 1.042 0 011.042-1.041h4.166a1.041 1.041 0 110 2.083h-4.166a1.041 1.041 0 01-1.042-1.042z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgFilter
