import { createPortal } from "react-dom";
import { useContext } from "react";

import Cross from "../Cross";

import styles from "./OrderModel.module.scss";
import CartContext from "../../storage/cart-context";

const ModelBackdrop = (props) => {
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

const Model = (props) => {
  const ctx = useContext(CartContext);
  return (
    <>
      <ModelBackdrop backdrop={{ onClick: ctx.onHideOrder }} />
      <section className={`${styles.content} ${props.className}`}>
        <div className={styles.cross}>
          <Cross
            className={styles.svg}
            path={{ className: styles["shape-fill"] }}
            svg={{ onClick: ctx.onHideOrder }}
          />
        </div>
        <div className={`${styles.mainContent} ${props.className}`}>
          {props.children}
        </div>
      </section>
    </>
  );
};

const OrderModel = (props) => {
  return (
    <Model className={styles.model}>
      <section id={styles.orderContent}>
        <h2>Your order will be delivered soon. We appreciate you using our food app.</h2>
      </section>
    </Model>
  );
};

const OrderModelPortal = (props) => {
  return createPortal(<OrderModel />, document.querySelector("#model"));
};

export default OrderModelPortal;
