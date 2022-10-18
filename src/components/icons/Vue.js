import * as React from 'react'

function SvgVue({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9.217 12.388L25 39.613l15.783-27.225H34.47L25 28.723l-9.548-16.335H9.217z"
        fill="currentColor"
      />
      <path
        d="M15.45 12.387L25 28.8l9.469-16.414h-5.84L25 18.7l-3.709-6.313h-5.84z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  )
}

export default SvgVue
