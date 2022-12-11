import React from "react";

//styles
import styles from "./PrimaryCard.module.scss";

const PrimaryCard = props => {
  return (
    <>
      <div className={`${styles["primary-card"]} ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default PrimaryCard;
