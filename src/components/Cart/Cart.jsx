import React, { useContext } from "react";

// components
import CartModel from "../UI/model/CartModel";
import FoodContext from "../storage/food-context";

// styles
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const ctx = useContext(FoodContext);
  return (
    <>
      <CartModel>
        <section className={styles.cartModel}>
          {ctx.DUMMY_DATA.map((food) => {
            return (
              <React.Fragment key={food.id}>
                <div>{food.name}</div>
                <div>{"Total Amount"}</div>
                <div> {`\u20B9 ${food.price}`} </div>
              </React.Fragment>
            );
          })}
        </section>
      </CartModel>
    </>
  );
};

export default Cart;
