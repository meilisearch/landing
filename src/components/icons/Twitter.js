import * as React from 'react'

function SvgTwitter({ title, titleId, ...props }) {
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
        d="M22.871 6.591a8.385 8.385 0 01-2.402.658 4.196 4.196 0 001.84-2.314c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.732 1.86 3.482a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.1 4.211 4.211 0 01-1.89.072 4.185 4.185 0 003.907 2.905 8.393 8.393 0 01-6.19 1.732 11.83 11.83 0 006.41 1.88c7.692 0 11.9-6.372 11.9-11.9 0-.18-.006-.362-.014-.54a8.497 8.497 0 002.087-2.165z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgTwitter
