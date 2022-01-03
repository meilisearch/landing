import * as React from 'react'

function SvgLightning({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.86.667a1.458 1.458 0 011.078 1.407v10.209h8.75a1.458 1.458 0 011.26 2.193l-10.208 17.5a1.458 1.458 0 01-2.719-.735V21.033h-8.75a1.46 1.46 0 01-1.26-2.194L11.22 1.34a1.459 1.459 0 011.64-.672zM4.81 18.116h7.67a1.458 1.458 0 011.458 1.458v6.272L20.149 15.2h-7.67a1.458 1.458 0 01-1.458-1.458V7.469l-6.21 10.647z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgLightning
