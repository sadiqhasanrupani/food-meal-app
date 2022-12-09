import React from "react";

import styles from "./RedBtn.module.scss";

const RedBtn = (props) => {
  return (
    <>
      <button className={`${styles["red-btn"]} ${props.className}`} {...props.RedBtn}>
        {props.children}
      </button>
    </>
  );
};

export default RedBtn;
