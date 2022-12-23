import React, { forwardRef } from "react";
import styles from "./input.module.scss";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <input
        ref={ref}
        className={`${styles.input} ${props.className}`}
        {...props.Input}
      />
    </>
  );
});

export default Input;
