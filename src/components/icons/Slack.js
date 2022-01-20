import * as React from 'react'

function SvgSlack({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8.825 18.142A2.466 2.466 0 016.366 20.6a2.466 2.466 0 01-2.459-2.459 2.465 2.465 0 012.46-2.46h2.46v2.46l-.002.002zm1.24 0a2.465 2.465 0 012.459-2.46 2.466 2.466 0 012.46 2.46v6.16a2.466 2.466 0 01-2.46 2.458 2.466 2.466 0 01-2.459-2.459v-6.159zm2.459-9.983A2.466 2.466 0 0110.066 5.7a2.464 2.464 0 012.459-2.459 2.465 2.465 0 012.46 2.459v2.46h-2.461v-.001zm0 1.24a2.465 2.465 0 012.46 2.459 2.466 2.466 0 01-2.46 2.46H6.366a2.467 2.467 0 01-2.459-2.46 2.464 2.464 0 012.46-2.46h6.158-.001zm9.984 2.459a2.465 2.465 0 012.46-2.46 2.464 2.464 0 012.458 2.46 2.466 2.466 0 01-2.458 2.46h-2.46v-2.46zm-1.24 0a2.467 2.467 0 01-2.46 2.46 2.466 2.466 0 01-2.46-2.46V5.7a2.465 2.465 0 012.46-2.459 2.464 2.464 0 012.46 2.459v6.159-.002zm-2.46 9.983a2.465 2.465 0 012.46 2.46 2.466 2.466 0 01-2.46 2.459 2.466 2.466 0 01-2.46-2.459v-2.46h2.46zm0-1.24a2.466 2.466 0 01-2.46-2.459 2.466 2.466 0 012.46-2.46h6.16a2.465 2.465 0 012.458 2.46 2.466 2.466 0 01-2.458 2.46h-6.16z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgSlack
