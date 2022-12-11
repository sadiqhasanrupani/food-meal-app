import React from "react";

// import styles from "./Cross.module.scss";

const Cross = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        {...props.svg}
      >
        <path
          d="M22 2L2 22M2 2L22 22"
          stroke="#3E3B53"
          strokeWidth="4"
          strokeLinecap="round"
          {...props.path}
        />
      </svg>
    </>
  );
};

export default Cross;
