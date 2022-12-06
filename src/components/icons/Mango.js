import * as React from 'react'

function SvgMango({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x={1.021}
        y={1.29}
        width={115}
        height={115}
        rx={15.5}
        stroke="#EDEEF7"
        strokeOpacity={0.3}
      />
      <g clipPath="url(#mango_svg__clip0_671_6346)">
        <path
          d="M45.85 50.961l-3.701 5.766-3.669-5.734c-.228.337-.155.645-.155.927-.008 2.342-.022 4.687.007 7.03.008.63-.128.893-.789.867-1.624-.062-1.352.141-1.357-1.429-.014-3.514.013-7.03-.019-10.544-.006-.67.203-.782.808-.856 1.142-.14 1.787.323 2.339 1.342.86 1.589 1.865 3.092 2.868 4.726 1.168-1.894 2.274-3.692 3.384-5.488.28-.454 2.06-.801 2.46-.485.205.163.14.407.14.62.005 3.821-.003 7.643.01 11.464 0 .456-.119.63-.581.647-1.565.06-1.565.079-1.565-1.528v-7.26l-.18-.07v.005zM67.154 50.837c0 2.844-.021 5.466.014 8.087.01.677-.138.925-.827.898-1.302-.052-1.302-.01-1.302-1.384 0-3.516.017-7.033-.016-10.549-.007-.699.192-.863.848-.896.844-.044 1.351.265 1.847.962 1.67 2.347 3.406 4.645 5.126 6.952.17.228.274.543.693.666V51.81c0-1.34.02-2.68-.01-4.019-.01-.543.09-.793.69-.786 1.436.017 1.436-.017 1.436 1.495 0 3.489-.012 6.978.013 10.465.005.632-.13.863-.78.868-.73.005-1.208-.194-1.667-.84-1.783-2.503-3.635-4.951-5.464-7.42-.144-.192-.304-.372-.601-.735v-.002zM87.028 52.675c.64 0 1.281.037 1.916-.011.58-.044.72.204.707.767-.032 1.34-.01 2.678-.01 4.017 0 .312-.012.598-.28.823-2.842 2.381-7.162 2.386-9.485-.227-1.774-1.992-2.177-5.162-.976-7.646 1.245-2.572 3.771-3.903 6.672-3.526a6.46 6.46 0 013.225 1.34c.29.225.413.428.104.725a.477.477 0 00-.053.062c-.581.785-1.281.943-2.1.474-1.763-1.01-3.864-.7-5.131.756-1.376 1.582-1.53 4.2-.352 5.98 1.091 1.648 3.248 2.218 5.238 1.383.89-.374 1.417-1.833 1-2.743-.125-.272-.352-.206-.549-.21-.64-.011-1.28-.023-1.918 0-.435.017-.655-.125-.608-.616.025-.277.02-.558 0-.837-.029-.41.155-.53.521-.519.693.018 1.386.005 2.079.005v.003zM29.288 57.383V42.907c0-.223.003-.445.006-.668.004-.299.183-.369.424-.364.221.005.35.106.35.352 0 .194.004.39.004.585v29.116c0 .223 0 .446-.013.669-.013.208-.155.273-.33.276-.194.005-.395-.006-.423-.266-.024-.221-.02-.446-.02-.669V57.381l.002.002zM21.277 49.344c-.268.26-.535.52-.815.79-.218-1.633 1.657-3.515 3.566-3.299.352.04.321.295.323.55.005 1.882-1.702 3.512-3.55 3.361.038-.512.441-.804.656-1.203.04-.166.04-.29-.18-.2zM38.7 67.921c-1.125.014-2.04-.645-2.371-1.679-.34-1.06-.035-2.198.77-2.872.79-.662 2.086-.734 2.924-.148.202.141.531.245.258.626-.22.306-.405.286-.728.105-1.3-.73-2.512.029-2.456 1.5.051 1.35 1.269 2.081 2.39 1.4.326-.197.613-.438.85.026.233.46-.242.54-.463.694-.355.25-.773.369-1.172.347l-.002.001zM80.422 65.788c0-.278-.024-.56.005-.836.082-.826-.016-1.45-1.054-1.223-.255.055-.466-.027-.477-.386-.011-.402.208-.449.509-.446.958.007 1.915.007 2.873.002.275 0 .46.059.46.407 0 .33-.16.485-.444.423-1.056-.232-1.091.424-1.048 1.233.042.778.003 1.56.011 2.34.003.318-.05.535-.428.537-.392.002-.413-.241-.41-.544.006-.502.002-1.004.002-1.505l.001-.002zM101.278 65.294c0-.642.005-1.284 0-1.924-.003-.292.071-.47.4-.476.341-.007.482.122.478.483-.009 1.003.02 2.009-.009 3.011-.015.511.155.704.643.669.45-.034.906-.002 1.358-.004.271 0 .469.059.459.414-.008.307-.18.37-.416.37-.825.002-1.651-.001-2.476.004-.36.002-.443-.211-.438-.538.009-.669.003-1.339.003-2.008l-.002-.001zM70.685 65.292c0-.638.004-1.277 0-1.915-.001-.274.023-.481.373-.483.354-.002.46.156.458.5-.008 1.303-.007 2.609 0 3.914.001.322-.063.526-.434.53-.4.003-.4-.252-.398-.548.005-.667 0-1.333 0-2l.001.002z"
          fill="currentColor"
        />
        <path
          d="M21.278 49.344a.92.92 0 01.62-.41c-.005.356-.253.46-.44.61l-.18-.2z"
          fill="#FBB066"
        />
        <path
          d="M98.308 46.83c-3.649-.011-6.445 2.84-6.461 6.591-.016 3.719 2.758 6.608 6.35 6.613 3.593.005 6.38-2.85 6.407-6.563.027-3.76-2.693-6.629-6.296-6.64zm-.056 11.096c-2.37-.004-4.145-1.948-4.141-4.533.003-2.536 1.786-4.493 4.102-4.503 2.308-.01 4.141 2.013 4.14 4.57 0 2.562-1.754 4.469-4.1 4.466zM62.693 59.142c-1.632-3.873-3.266-7.744-4.853-11.636-.347-.85-.968-.461-1.49-.54-.436-.067-.783-.01-1.002.545-.8 2.032-1.663 4.04-2.502 6.056-.776 1.863-1.557 3.723-2.325 5.59-.096.233-.403.553.176.649 1.387.23 1.726.05 2.273-1.3.167-.411.368-.808.501-1.229.144-.45.408-.572.842-.56 1.038.029 2.076.01 3.114.01 2.061 0 2.098-.015 2.82 2.045.283.806.64 1.248 1.353 1.035.325 0 .512-.016.697.004.586.063.599-.18.392-.667l.004-.002zm-4.525-4.422c-1.184-.01-2.368-.004-3.668-.004.69-1.69 1.334-3.262 2.006-4.903.472.558.598 1.215.86 1.793.383.853.714 1.73 1.076 2.593.131.311.161.524-.274.52zM20.4 51.006c-.372-.117-.287-.412-.301-.675-.055-.947-.055-1.895-.207-2.835-.117-.723-.598-.607-1.037-.513-.52.11-.395.514-.256.858.312.776.517 1.578.682 2.4.088.435.014.564-.445.591-4.022.231-6.098 2.19-6.676 6.336-.288 2.065-.765 4.044-1.83 5.835a6.263 6.263 0 00-.533 1.213c-.553 1.658.12 3.012 1.737 3.511 1.026.315 2.07.287 3.082-.022 3.361-1.024 6.118-2.972 8.108-6.022.921-1.413 1.42-2.99 1.416-5.002-.146-2.46-.914-4.778-3.738-5.673l-.001-.002zm1.063 10.047c-1.846 2.607-4.273 4.325-7.28 5.102-1.018.263-2.148.46-2.888-.556-.738-1.01-.296-2.103.243-3.055.984-1.734 1.563-3.591 1.777-5.587.045-.414.163-.818.237-1.23.589-3.256 2.99-4.218 5.153-4.255 3.145-.112 4.513 3.174 4.259 5.666-.147 1.446-.675 2.748-1.5 3.913v.002zM63.312 64.45c-.054-.837-.635-1.444-1.532-1.526-.556-.05-1.119-.008-1.679-.026-.358-.012-.46.169-.454.509.011.642.003 1.284.003 1.927 0 .642.008 1.285-.003 1.927-.006.356.058.593.475.575.427-.018.389-.337.35-.595-.126-.838.228-1.106.975-.985.153.025.32-.012.475-.044.902-.193 1.445-.885 1.389-1.76l.001-.001zm-2.137 1.013c-.87.072-.648-.52-.704-1.015-.08-.704.278-.798.728-.723.643 0 1.184.062 1.233.827.04.61-.397.84-1.257.913v-.002zM52.24 67.546c-.058-.154-.116-.31-.18-.462-.51-1.222-1.024-2.442-1.53-3.665-.118-.287-.21-.533-.596-.55-.432-.018-.53.268-.66.577-.506 1.223-1.028 2.44-1.519 3.67-.082.204-.432.494-.035.681.309.146.659.056.747-.37.154-.749.643-.806 1.253-.79.716.02 1.447-.117 1.655.92.07.341.407.294.674.266.152-.017.245-.094.187-.275l.005-.002zm-2.426-1.636c-.669.032-.715-.2-.432-.735.174-.33.227-.727.563-1.1.16.37.283.646.398.924.376.908.373.87-.53.913l.001-.002zM93.748 67.218c-.53-1.277-1.063-2.553-1.589-3.83-.12-.291-.23-.526-.616-.519-.385.005-.49.248-.61.536-.505 1.227-1.026 2.447-1.52 3.679-.085.217-.418.516-.07.705.341.183.69.035.792-.419.148-.655.567-.8 1.136-.724.21.029.429.029.639 0 .524-.073.871.1 1.01.67.076.314.231.572.511.528.643-.031.432-.351.318-.626h-.001zM90.93 65.79c-.264-.314.218-.79.336-1.207.044-.152.138-.288.288-.595.29.69.524 1.244.778 1.852-.56.064-1.149.25-1.403-.05h.001z"
          fill="currentColor"
        />
        <path
          d="M21.571 56.853c-.03.978-.403 1.922-.905 2.819-.144.258-.357.449-.656.288-.328-.178-.338-.485-.167-.783.755-1.31 1.08-2.65.341-4.102a.464.464 0 01.202-.644c.304-.164.524 0 .657.267.325.647.52 1.337.527 2.157l.001-.002z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="mango_svg__clip0_671_6346">
          <path
            fill="currentColor"
            transform="translate(9.605 41.875)"
            d="M0 0h95v31H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgMango