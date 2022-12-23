import React from "react";

const UpArrow = (props) => {
  return (
    <svg {...props.svg} width="27" height="27" viewBox="0 0 27 27">
      <g filter="url(#filter0_d_145_21)">
        <rect x="4" width="19" height="19" rx="4" fill="#F1EDED" />
        <path
          {...props.path}
          d="M12.6752 4.20299C13.0725 3.62361 13.9275 3.62361 14.3248 4.20299L20.654 13.4345C21.1089 14.0981 20.6338 15 19.8292 15L7.17082 15C6.36623 15 5.89108 14.0981 6.34605 13.4345L12.6752 4.20299Z"
          fill="#14C910"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_145_21"
          x="0"
          y="0"
          width="27"
          height="27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_145_21"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_145_21"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default React.memo(UpArrow);
