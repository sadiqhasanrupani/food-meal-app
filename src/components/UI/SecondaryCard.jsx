import React from "react";

import styles from "./SecondaryCard.module.scss";

const SecondaryCard = (props) => {
  return (
    <>
      <div className={`${styles["secondary-card"]} ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default SecondaryCard;
