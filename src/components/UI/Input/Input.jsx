import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./input.module.scss";

const Input = forwardRef((props, ref) => {

  // const inputRef= useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     values: inputRef.current.value
  //   }
  // })

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
