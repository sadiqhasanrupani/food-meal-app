import React, { useContext } from "react";
import { createPortal } from "react-dom";
import Cross from "../Cross";

//styles
import styles from "./CartModel.module.scss";

//context
import CartContext from "../../storage/cart-context";

export const ModelBackdrop = (props) => {
  return (
    <>
      <div
        className={`${styles.backdrop} ${props.className}`}
        {...props.backdrop}
      >
        {props.children}
      </div>
    </>
  );
};

export const Model = (props) => {
  const cartCtx = useContext(CartContext)
  return (
    <>
      <ModelBackdrop backdrop={{onClick: cartCtx.onHideCart}} />
      <section className={`${styles.content} ${props.className}`}>
        <div className={styles.cross}>
          <Cross
            className={styles.svg}
            path={{ className: styles["shape-fill"] }}
            svg={{ onClick: cartCtx.onHideCart }}
          />
        </div>
        <div className={`${styles.mainContent} ${props.className}`}>
          {props.children}
        </div>
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
