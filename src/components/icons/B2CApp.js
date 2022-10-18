import * as React from 'react'
const SvgB2CApp = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      x={13.901}
      y={5.829}
      width={28.756}
      height={45.21}
      rx={2.259}
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.134 40.435H42.53M14.134 11.437H42.53"
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={28.333} cy={45.601} r={1.957} fill="#EDEEF7" />
    <path
      d="M28.323 25.08v6.769M28.163 18.864a.26.26 0 0 1 .235 0l5.586 2.832a.26.26 0 0 1 0 .464l-5.586 2.832a.26.26 0 0 1-.235 0l-5.585-2.832a.26.26 0 0 1 0-.464l5.585-2.832Z"
      stroke="#705B8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34.441 22.191v7.01a.26.26 0 0 1-.142.232l-5.9 2.991a.26.26 0 0 1-.236 0l-5.9-2.991a.26.26 0 0 1-.142-.232v-7.01"
      stroke="#705B8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgB2CApp
