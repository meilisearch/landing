import * as React from 'react'

function SvgPuzzle({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.197.005c1.442-.02 2.683.761 3.777 1.854l1.837 1.839a5.756 5.756 0 117.986 7.985l1.84 1.838v.003c1.091 1.094 1.875 2.333 1.853 3.774-.02 1.43-.829 2.625-1.855 3.646l-.003.001-1.86 1.861c-.695.696-1.605.621-2.155.39-.544-.23-1.123-.757-1.256-1.564a2.839 2.839 0 10-3.265 3.265c.807.132 1.335.712 1.565 1.255.232.55.306 1.46-.39 2.155l-1.866 1.867-.002.001c-1.017 1.025-2.212 1.832-3.64 1.852-1.44.022-2.678-.758-3.77-1.85h-.002l-1.842-1.844a5.757 5.757 0 01-10.51-3.764 5.756 5.756 0 012.524-4.222L2.324 18.51v-.003C1.23 17.413.45 16.174.47 14.733c.022-1.43.831-2.625 1.857-3.646l.003-.002 1.86-1.86c.695-.696 1.605-.623 2.154-.391.544.23 1.125.758 1.257 1.565a2.84 2.84 0 103.266-3.264c-.808-.131-1.336-.712-1.565-1.256-.234-.55-.306-1.458.39-2.155l1.86-1.86.002-.003C12.572.835 13.768.027 15.197.005h-.001zm.044 2.917c-.298.004-.803.172-1.62.996l-.004.004-.793.792a5.755 5.755 0 11-7.646 7.646l-.792.793-.004.003c-.824.818-.992 1.321-.996 1.62-.005.29.14.808 1.002 1.673l3.398 3.398a1.459 1.459 0 01-.826 2.475 2.839 2.839 0 103.214 3.214 1.459 1.459 0 012.475-.825l3.402 3.402.002.001c.86.86 1.38 1.002 1.667.998.297-.004.8-.172 1.614-.993l.005-.005.797-.797a5.756 5.756 0 117.646-7.646l.792-.792.004-.003c.825-.818.992-1.323.997-1.62.004-.29-.139-.808-1-1.672v-.001l-3.4-3.398A1.458 1.458 0 0126 9.71a2.84 2.84 0 10-3.214-3.214 1.458 1.458 0 01-2.475.825l-3.398-3.397c-.864-.864-1.385-1.007-1.672-1.002z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPuzzle