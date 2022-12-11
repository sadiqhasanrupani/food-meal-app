import React from "react";

const DownArrow = (props) => {
  return (
    <svg
      {...props.svg}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_145_24)">
        <rect
          x="23"
          y="19"
          width="19"
          height="18.9999"
          rx="4"
          transform="rotate(-180 23 19)"
          fill="#F1EDED"
        />
        <path
          {...props.path}
          d="M14.3248 14.797C13.9275 15.3763 13.0725 15.3763 12.6752 14.797L6.34605 5.56545C5.89108 4.90185 6.36623 3.99999 7.17082 3.99999L19.8292 3.99999C20.6338 3.99999 21.1089 4.90185 20.6539 5.56545L14.3248 14.797Z"
          fill="#C91010"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_145_24"
          x="0"
          y="6.10352e-05"
          width="27"
          height="26.9999"
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
            result="effect1_dropShadow_145_24"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_145_24"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DownArrow;
