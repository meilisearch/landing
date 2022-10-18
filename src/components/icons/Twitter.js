import * as React from 'react'
const SvgTwitter = ({ title, titleId, ...props }) => (
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
      d="M22.871 6.591a8.385 8.385 0 0 1-2.402.658 4.196 4.196 0 0 0 1.84-2.314c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.732 1.86 3.482a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.1 4.211 4.211 0 0 1-1.89.072 4.185 4.185 0 0 0 3.907 2.905 8.393 8.393 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.41 1.88c7.692 0 11.9-6.372 11.9-11.9 0-.18-.006-.362-.014-.54a8.497 8.497 0 0 0 2.087-2.165Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgTwitter
