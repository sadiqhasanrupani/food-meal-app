import React, { useContext } from "react";

import Cart from "../../../assets/Cart.svg";

//styles
import styles from "../../../styles/layout-styles/ShowCart.module.scss";

// context
import CartContext from "../../storage/cart-context";

const ShowCart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((currentVal, itemAction) => {
    return currentVal + itemAction.amount;
  }, 0);

  return (
    <>
      <div className={styles.cartContainer} onClick={cartCtx.onShowCart}>
        <div id={styles.showcartTitle}>
          <h1>Show Cart</h1>
        </div>
        <div className={styles.cartImage}>
          <img src={Cart} alt="Cart" />
        </div>
        <div className={styles.badge} id={styles.badge}>
          {numberOfCartItem}
        </div>
      </div>
    </>
  );
};

export default ShowCart;
