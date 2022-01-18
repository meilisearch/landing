import * as React from 'react'

function SvgWrench({ title, titleId, ...props }) {
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
        d="M3.683 5.52a1.042 1.042 0 01.93.286L7.187 8.38a.846.846 0 101.196-1.196L5.81 4.611a1.042 1.042 0 01.321-1.691 6.216 6.216 0 018.617 6.71l7.165 7.165a3.62 3.62 0 11-5.118 5.118l-7.166-7.165a6.215 6.215 0 01-6.707-8.623 1.042 1.042 0 01.761-.605zm.802 3.105a4.128 4.128 0 005.209 3.98 1.042 1.042 0 011.008.27l7.566 7.564a1.536 1.536 0 002.171-2.171l-7.564-7.566a1.041 1.041 0 01-.27-1.007A4.127 4.127 0 008.63 4.486l1.226 1.225a2.93 2.93 0 11-4.142 4.143l-1.23-1.229z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgWrench
