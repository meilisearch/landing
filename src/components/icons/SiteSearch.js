import * as React from 'react'
const SvgSiteSearch = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M49.18 20.932V9.356c0-.91-.737-1.649-1.647-1.649H6.429c-.91 0-1.649.738-1.649 1.649v33.413c0 .91.738 1.648 1.649 1.648h18.596"
      stroke="#EDEEF7"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path d="M5.128 15h43.946" stroke="#EDEEF7" strokeWidth={1.5} />
    <circle
      cx={37.4}
      cy={32.721}
      r={11.764}
      stroke="#EDEEF7"
      strokeWidth={1.5}
    />
    <circle
      opacity={0.8}
      cx={8.816}
      cy={11.432}
      r={0.75}
      fill="#705B8C"
      stroke="#705B8C"
      strokeWidth={0.665}
    />
    <circle
      opacity={0.8}
      cx={13.267}
      cy={11.432}
      r={0.75}
      fill="#705B8C"
      stroke="#705B8C"
      strokeWidth={0.665}
    />
    <circle
      opacity={0.8}
      cx={17.718}
      cy={11.432}
      r={0.75}
      fill="#705B8C"
      stroke="#705B8C"
      strokeWidth={0.665}
    />
    <path
      opacity={0.8}
      d="M27.689 10.682a.75.75 0 0 0 0 1.5v-1.5Zm17.459 1.5a.75.75 0 0 0 0-1.5v1.5Zm-17.46 0h17.46v-1.5h-17.46v1.5Z"
      fill="#705B8C"
    />
    <circle
      opacity={0.8}
      cx={37.399}
      cy={32.721}
      r={8.353}
      stroke="#705B8C"
      strokeWidth={1.5}
    />
    <path
      d="m44.59 42.136 5.86 5.859a1.648 1.648 0 0 0 2.33 0l.069-.068a1.648 1.648 0 0 0 0-2.331l-5.86-5.86"
      stroke="#EDEEF7"
      strokeWidth={1.5}
    />
  </svg>
)
export default SvgSiteSearch
