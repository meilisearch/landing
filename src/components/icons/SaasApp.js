import * as React from 'react'

function SvgSaasApp({ title, titleId, ...props }) {
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
        d="M23.625 41.41v5.57M31.837 41.41v5.57M18.922 47.74H36.54"
        stroke="#705B8C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.103 38.253V11.141a3.012 3.012 0 00-3.012-3.012H9.37a3.012 3.012 0 00-3.012 3.012v27.112a3.012 3.012 0 003.012 3.012H46.09a3.012 3.012 0 003.012-3.012z"
        stroke="#EDEEF7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.8}
        d="M11.317 13.944h6.894M11.317 18.07h5.205"
        stroke="#705B8C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.537 33.882h42.567"
        stroke="#EDEEF7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgSaasApp
