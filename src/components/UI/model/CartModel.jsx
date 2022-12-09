import React from "react";
import { createPortal } from "react-dom";

import styles from "./CartModel.module.scss";

const ModelBackdrop = (props) => {
  return (
    <>
      <div className={`${styles.backdrop} ${props.className}`} />;
    </>
  );
};

const Model = (props) => {
  return (
    <>
      <ModelBackdrop />
      <section className={`${styles.content} ${props.className}`}>
        {props.children}
      </section>
    </>
  );
};

const CartModel = (props) => {
  return (
    <>
      {createPortal(<ModelBackdrop />, document.querySelector("#model"))}
      {createPortal(
        <Model>{props.children}</Model>,
        document.querySelector("#model")
      )}
    </>
  );
};

export default CartModel;
