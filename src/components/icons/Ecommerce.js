import * as React from 'react'

function SvgEcommerce({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={5.8}
        y={10.079}
        width={44.401}
        height={36.71}
        rx={1.648}
        stroke="#EDEEF7"
        strokeWidth={1.5}
      />
      <path d="M6.147 17.372h43.946" stroke="#EDEEF7" strokeWidth={1.5} />
      <circle
        cx={9.836}
        cy={13.803}
        r={0.75}
        fill="#705B8C"
        stroke="#705B8C"
        strokeWidth={0.665}
      />
      <circle
        cx={14.287}
        cy={13.803}
        r={0.75}
        fill="#705B8C"
        stroke="#705B8C"
        strokeWidth={0.665}
      />
      <circle
        cx={18.738}
        cy={13.803}
        r={0.75}
        fill="#705B8C"
        stroke="#705B8C"
        strokeWidth={0.665}
      />
      <path
        d="M28.708 13.053a.75.75 0 000 1.5v-1.5zm17.46 1.5a.75.75 0 000-1.5v1.5zm-17.46 0h17.46v-1.5h-17.46v1.5z"
        fill="#705B8C"
      />
      <circle cx={23.693} cy={38.712} r={1.667} fill="#EDEEF7" />
      <circle cx={32.902} cy={38.712} r={1.667} fill="#EDEEF7" />
      <path
        d="M14.286 23.654h3.323c.509 0 .955.339 1.092.828l2.78 9.954c.138.49.584.828 1.092.828h11.652c.483 0 .912-.305 1.07-.761l2.03-5.844a1.133 1.133 0 00-1.07-1.505h-16.78"
        stroke="#EDEEF7"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgEcommerce
