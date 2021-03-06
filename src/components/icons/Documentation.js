import * as React from 'react'

function SvgDocumentation({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.152v13.157c.992-.445 2.404-.909 4-.909 1.59 0 3 .46 4 .91V6.151a9.187 9.187 0 00-.863-.438C9.31 5.35 8.204 5 7 5c-1.736 0-3.26.725-4 1.152zm10 0v13.206c.998-.423 2.41-.858 4-.858 1.596 0 3.01.438 4 .858V6.152C20.26 5.725 18.736 5 17 5c-1.204 0-2.312.349-3.137.714-.295.13-.583.277-.863.438zM12 4.42c-.27-.156-.627-.345-1.053-.534C9.967 3.45 8.574 3 7 3c-2.308 0-4.238.97-5.076 1.464A1.899 1.899 0 001 6.112v13.912c0 .624.37 1.097.795 1.335.422.235.99.298 1.507.026.823-.432 2.181-.985 3.698-.985 1.905 0 3.552.873 4.185 1.262a1.58 1.58 0 001.61.023c.637-.365 2.29-1.185 4.205-1.185 1.541 0 2.917.53 3.737.937.952.47 2.263-.156 2.263-1.378V6.112a1.9 1.9 0 00-.924-1.648C21.238 3.971 19.308 3 17 3c-1.574 0-2.966.451-3.947.886-.426.189-.783.378-1.053.534z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgDocumentation
