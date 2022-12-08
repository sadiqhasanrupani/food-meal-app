import React from "react";

//styles
import styles from "../../../styles/layout-styles/ShowCart.module.scss";

import Cart from "../../../assets/Cart.svg";

const ShowCart = (props) => {
  return (
    <>
      <div className={styles.cartContainer}>
        <div id={styles.showcartTitle}>
          <h1>Show Cart</h1>
        </div>
        <div className={styles.cartImage}>
          <img src={Cart} alt="Cart" />
        </div>
        <div className={styles.badge} id={styles.badge}>
          0
        </div>
      </div>
    </>
  );
};

export default ShowCart;
