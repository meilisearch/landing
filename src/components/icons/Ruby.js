import * as React from 'react'

function SvgRuby({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M19.923 17.203L5.52 25.756l18.65-1.265 1.436-18.806-5.683 11.518z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M24.2 24.478l-1.603-11.064-4.367 5.766 5.97 5.298z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M24.222 24.478l-11.744-.922-6.896 2.177 18.64-1.255z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M5.6 25.735l2.934-9.611-6.456 1.38 3.522 8.23zM18.229 19.212l-2.7-10.574-7.724 7.241 10.424 3.333z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M24.996 8.787l-7.302-5.964-2.034 6.574 9.336-.61z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M21.579.697l-4.295 2.374-2.71-2.406 7.005.032zM.379 20.728l1.799-3.282-1.455-3.909-.344 7.19z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M.625 13.415l1.464 4.153 6.363-1.428 7.264-6.75 2.05-6.512-3.228-2.28L9.05 2.653c-1.729 1.609-5.084 4.79-5.205 4.85-.12.062-2.215 4.023-3.22 5.913zM5.602 25.73l2.91-9.64 9.667 3.105c-3.495 3.277-7.382 6.048-12.577 6.536zM15.73 9.37l2.482 9.83c2.92-3.07 5.54-6.37 6.824-10.452l-9.306.623z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M25.01 8.798c.994-2.997 1.223-7.297-3.46-8.096l-3.843 2.123 7.304 5.973zM.379 20.685c.137 4.947 3.706 5.02 5.227 5.064l-3.512-8.201L.38 20.685zM15.742 9.385c2.244 1.38 6.765 4.149 6.857 4.2.142.08 1.95-3.047 2.36-4.815l-9.217.615zM8.508 16.09l3.891 7.507c2.3-1.248 4.103-2.769 5.753-4.397l-9.644-3.11z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
      <path
        d="M2.079 17.558l-.552 6.565C2.567 25.544 4 25.668 5.5 25.557c-1.086-2.703-3.256-8.108-3.421-7.999zM17.684 2.841l7.73 1.085C25 2.178 23.734 1.05 21.575.697l-3.891 2.144z"
        fill="currentColor"
        stroke="#21004B"
        strokeWidth={0.728}
        strokeLinejoin="bevel"
      />
    </svg>
  )
}

export default SvgRuby
