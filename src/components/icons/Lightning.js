import * as React from 'react'

function SvgLightning({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.772 1.078a1.041 1.041 0 01.77 1.005v7.292h6.25a1.042 1.042 0 01.9 1.567l-7.292 12.5a1.042 1.042 0 01-1.942-.525v-7.292h-6.25a1.043 1.043 0 01-.9-1.567l7.292-12.5a1.042 1.042 0 011.172-.48zm-5.75 12.464H12.5a1.042 1.042 0 011.042 1.041v4.48l4.436-7.605H12.5a1.042 1.042 0 01-1.042-1.041v-4.48l-4.436 7.605z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgLightning
