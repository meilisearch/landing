import * as React from 'react'

function SvgMedia({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M17.547 13.253h-3.25c-.91 0-1.648.738-1.648 1.649v27.065c0 .91.738 1.648 1.649 1.648h27.966c.91 0 1.648-.738 1.648-1.648v-3.775"
        stroke="#705B8C"
        strokeWidth={1.5}
      />
      <path
        d="M11.894 18.132H9.417c-.91 0-1.648.738-1.648 1.648v27.066c0 .91.738 1.648 1.648 1.648h27.966c.91 0 1.648-.738 1.648-1.648v-2.48"
        stroke="#705B8C"
        strokeWidth={1.5}
      />
      <rect
        x={17.528}
        y={8.373}
        width={31.263}
        height={30.362}
        rx={3}
        stroke="#EDEEF7"
        strokeWidth={1.5}
      />
      <path
        d="M39.008 22.689a1 1 0 010 1.732l-9.745 5.626a1 1 0 01-1.5-.866V17.93a1 1 0 011.5-.866l9.745 5.626z"
        stroke="#EDEEF7"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgMedia
