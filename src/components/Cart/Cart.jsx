import React, { useContext } from "react";

// styles
import styles from "./Cart.module.scss";
import PrimaryCard from "../UI/PrimaryCard";
import GreenBtn from "../UI/Buttons/GreenBtn";
import RedBtn from "../UI/Buttons/RedBtn";

// components
import CartModel from "../UI/model/CartModel";
import CartItem from "./CartItem";

// contexts
import CartContext from "../storage/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const tAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;

  const AddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const RemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };


  return (
    <>
      <CartModel>
        <PrimaryCard className={`${styles.cartModel} ${styles.slide}`}>
          {cartCtx.items.map((item) => {
            return (
              <div key={item.id}>
                <CartItem
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  onAdd={AddItemHandler.bind(null, item)}
                  onRemove={RemoveItemHandler.bind(null, item.id)}
                />
              </div>
            );
          })}
          <div className={styles.totalSection} id={styles.totalSection}>
            <span className={styles.label}>Total Amount</span>
            <span className={styles.totalAmount}>{`\u20B9 ${tAmount}`}</span>
          </div>
          <div
            className={`${styles.buttonSection}`}
            id={`${hasItems ? styles.hasItems : ""}`}
          >
            <RedBtn
              className={styles["close-btn"]}
              RedBtn={{ onClick: cartCtx.onHideCart }}
            >
              Close
            </RedBtn>
            {hasItems && (
              <GreenBtn className={styles["order-btn"]} GreenBtn={{onClick: cartCtx.onOrder}}>Order</GreenBtn>
            )}
          </div>
        </PrimaryCard>
      </CartModel>
    </>
  );
};

export default Cart;
