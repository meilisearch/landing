import * as React from 'react'

function SvgTwitter({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M30.319 3.248a12.228 12.228 0 01-3.503.96A6.12 6.12 0 0029.499.833a12.189 12.189 0 01-3.873 1.48 6.098 6.098 0 00-10.392 5.562 17.316 17.316 0 01-12.57-6.373 6.078 6.078 0 00-.826 3.067A6.098 6.098 0 004.55 9.646a6.078 6.078 0 01-2.762-.763v.076a6.103 6.103 0 004.893 5.98 6.14 6.14 0 01-2.756.106 6.103 6.103 0 005.697 4.236 12.241 12.241 0 01-9.028 2.526 17.252 17.252 0 009.348 2.742c11.219 0 17.354-9.294 17.354-17.355 0-.262-.008-.528-.02-.787A12.39 12.39 0 0030.32 3.25l-.001-.002z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgTwitter
