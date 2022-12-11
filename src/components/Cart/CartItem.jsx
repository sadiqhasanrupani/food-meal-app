import React, { useRef } from "react";

import styles from "./CartItem.module.scss";

import SecondaryCard from "../UI/SecondaryCard";
import Input from "../UI/Input/Input";
import UpArrow from "../UI/Buttons/UpArrow";
import DownArrow from "../UI/Buttons/DownArrow";

const CartItem = (props) => {
  const inputRef = useRef();

  return (
    <section className={styles.content} key={props.id}>
      <SecondaryCard>
        <div className={styles["foods-content"]}>
          <div className={styles["foods-image"]}>
            <img src={props.image} alt="foods-images" loading={"lazy"} />
          </div>
          <div className={styles["foods-detail"]}>
            {props.name}
            <div className={styles["foods-price-qty"]}>
              <div className={styles["foods-price"]}>
                Product Price{" "}
                <span className={styles.price}>{`\u20B9 ${props.price}`}</span>
              </div>
              <div className={styles["foods-qty"]}>
                QTY{" "}
                <div className={styles.flex}>
                  <UpArrow svg={{ onClick: props.onAdd, className: styles.svg}} />
                  <DownArrow svg={{ onClick: props.onRemove, className: styles.svg}} />
                </div>
                <Input
                  className={styles.qty}
                  Input={{
                    ref: inputRef,
                    id: styles.qty,
                    defaultValue: props.amount,
                    value: props.amount
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SecondaryCard>
    </section>
  );
};

export default CartItem;
