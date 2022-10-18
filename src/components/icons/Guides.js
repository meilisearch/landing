import * as React from 'react'
const SvgGuides = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm15.95-4.95a1 1 0 0 1 0 1.414l-3.018 3.018a2 2 0 0 1-2.45 2.45L8.464 16.95a1 1 0 0 1-1.414-1.414l3.018-3.018a2 2 0 0 1 2.45-2.45l3.018-3.018a1 1 0 0 1 1.414 0ZM7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgGuides
