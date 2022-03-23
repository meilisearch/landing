import * as React from 'react'

function SvgAngular({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.959.601L.379 5.444 2.45 23.4l11.509 6.374V18.602H10.34l-1.707 4.26H5.469l8.489-19.036v.002V.6zm0 9.412l-.001-.002-2.48 5.965h2.48v-5.964z"
        fill="currentColor"
      />
      <path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.957 3.825V.6l13.58 4.843L25.466 23.4l-11.509 6.374V18.602h3.59l1.706 4.26h3.165l-8.46-19.036-.001.002v-.003zm0 12.151v-5.963l.001-.002 2.48 5.965h-2.481z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgAngular
