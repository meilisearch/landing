import * as React from 'react'

function SvgPlug({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 25 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M13.938 23.866v2.917h8.75V29.7h-8.75a2.917 2.917 0 01-2.917-2.917v-2.917H6.646a5.833 5.833 0 01-5.833-5.833V7.825A1.458 1.458 0 012.27 6.367h4.375V.533h2.917v5.834h5.833V.533h2.916v5.834h4.375a1.458 1.458 0 011.459 1.458v10.208a5.834 5.834 0 01-5.834 5.833h-4.375zM6.646 20.95h11.666a2.917 2.917 0 002.917-2.917v-4.375H3.73v4.375a2.917 2.917 0 002.917 2.917zM21.229 9.283H3.73v1.459h17.5V9.283zm-8.75 9.48a1.458 1.458 0 110-2.917 1.458 1.458 0 010 2.916z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPlug
