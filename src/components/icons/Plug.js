import * as React from 'react'

function SvgPlug({ title, titleId, ...props }) {
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
        d="M13.542 18.75v2.084h6.25v2.083h-6.25a2.083 2.083 0 01-2.084-2.084V18.75H8.333a4.167 4.167 0 01-4.166-4.166V7.292A1.042 1.042 0 015.208 6.25h3.125V2.083h2.084V6.25h4.166V2.083h2.084V6.25h3.125a1.042 1.042 0 011.041 1.042v7.292a4.167 4.167 0 01-4.166 4.166h-3.125zm-5.209-2.083h8.334a2.083 2.083 0 002.083-2.084V11.46H6.25v3.125a2.083 2.083 0 002.083 2.083zM18.75 8.333H6.25v1.042h12.5V8.334zm-6.25 6.771a1.042 1.042 0 110-2.083 1.042 1.042 0 010 2.083z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPlug
