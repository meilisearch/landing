import * as React from 'react'

function SvgDiamond({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.048 10.152a2.32 2.32 0 011.81-.87h27.845a2.32 2.32 0 011.81.87l9.281 11.602a2.32 2.32 0 01-.093 3.012L30.497 50.29a2.321 2.321 0 01-3.434 0L3.859 24.766a2.32 2.32 0 01-.093-3.012l9.282-11.602zm2.923 3.77l-5.569 6.962h7.983l5.569-6.961H15.97zm12.81 1.393l-4.456 5.569h8.91l-4.455-5.57zm5.967 10.21H22.812l5.968 16.414 5.968-16.414zM22.575 38.454l-4.7-12.93H10.82l11.755 12.93zm12.41 0l4.701-12.93h7.054l-11.755 12.93zm12.173-17.57H39.18l-5.569-6.961h7.978l5.569 6.96z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgDiamond
