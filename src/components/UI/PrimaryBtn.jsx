import React from "react";

import styles from "./PrimaryBtn.module.scss";

const PrimaryBtn = (props) => {
  return (
    <button
      className={`${styles.primary_btn} ${props.className}`}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onSubmit={props.onSubmit}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;