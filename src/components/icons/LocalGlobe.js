import * as React from 'react'

function SvgLocalGlobe({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={1.021}
        y={1.29}
        width={115}
        height={115}
        rx={15.5}
        stroke="#EDEEF7"
        strokeOpacity={0.3}
      />
      <circle cx={69.202} cy={69.535} r={14.418} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.033 59.177s.405-9.898.26-14.029c-.277-7.92-6.425-14.35-14.35-14.35-7.926 0-14.351 6.424-14.351 14.35 0 7.926 6.002 13.948 14.35 14.35 4.502.218 14.09-.32 14.09-.32zm-14.075-6.159a7.845 7.845 0 100-15.689 7.845 7.845 0 000 15.69z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgLocalGlobe
