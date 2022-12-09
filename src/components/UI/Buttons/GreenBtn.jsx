import React from "react";

import styles from "./GreenBtn.module.scss";

const GreenBtn = (props) => {
  return (
    <>
      <button className={`${styles["green-btn"]} ${props.className}`} {...props.GreenBtn}>
        {props.children}
      </button>
    </>
  );
};

export default GreenBtn;
