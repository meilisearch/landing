import * as React from 'react'

function SvgVue({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M.379.479l13.58 23.425L27.539.48h-5.432l-8.148 14.055L5.743.48H.379z"
        fill="currentColor"
      />
      <path
        d="M5.742.478L13.958 14.6 22.106.478h-5.025L13.958 5.91 10.767.478H5.742z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  )
}

export default SvgVue
