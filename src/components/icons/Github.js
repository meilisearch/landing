import * as React from 'react'

function SvgGithub({ title, titleId, ...props }) {
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
        d="M12.71 2.936c-5.524 0-10 4.475-10 10a9.994 9.994 0 006.839 9.488c.5.087.687-.213.687-.476 0-.238-.013-1.024-.013-1.863-2.512.463-3.162-.611-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.186-.85-.65-.013-.662.788-.012 1.35.726 1.538 1.025.9 1.512 2.338 1.088 2.912.826.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.114-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.586 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.311.675.912.675 1.85 0 1.336-.013 2.411-.013 2.75 0 .261.188.573.688.473a10.015 10.015 0 006.812-9.487c0-5.524-4.475-10-10-10z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGithub
