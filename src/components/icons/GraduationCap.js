import * as React from 'react'

function SvgGraduationCap({ title, titleId, ...props }) {
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
        d="M27.195 7.17a2.32 2.32 0 011.93 0L52.33 17.779a2.319 2.319 0 010 4.22l-5.607 2.563v13.602c0 .466-.116.977-.413 1.452-.765 1.233-6.149 9.113-18.15 9.113-12.003 0-17.382-7.88-18.15-9.113a2.743 2.743 0 01-.413-1.452V24.562L3.99 22a2.32 2.32 0 010-4.221L27.195 7.172V7.17zM14.238 26.685V37.59c1.136 1.575 5.369 6.497 13.922 6.497 8.555 0 12.786-4.922 13.923-6.497V26.685l-12.958 5.921a2.32 2.32 0 01-1.93 0l-12.957-5.921zm-3.701-6.8l2.343 1.073 15.28 6.987 15.278-6.985 2.343-1.072-17.621-8.054-17.623 8.052zm44.308 6.8a3.48 3.48 0 11-6.961 0 3.48 3.48 0 016.96 0zm-1.16 6.961a2.32 2.32 0 00-4.641 0v12.762a2.32 2.32 0 004.64 0V33.646z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGraduationCap
