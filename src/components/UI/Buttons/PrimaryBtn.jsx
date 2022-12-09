import React from "react";

import styles from "./PrimaryBtn.module.scss";

const PrimaryBtn = (props) => {
  return (
    <button
      className={`${styles.primary_btn} ${props.className}`}
      {...props.PrimaryBtn}
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;