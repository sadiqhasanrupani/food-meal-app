import React, { useRef } from "react";

// Styles
import styles from "./AvaliableFoods.module.scss";

// Components
import FoodList from "./FoodList";

const AvaliableFoods = (props) => {
  const amountCartItem = useRef();

  const getAmountHandler = (amount) => {
    console.log(amount);
  };

  return (
    <>
      <section className={`${styles.food_container} ${styles.flex}`}>
        <div className={styles.svg_item}>
          <svg width="256" height="9" viewBox="0 0 256 9">
            <line
              x1="4.98428"
              y1="4.98434"
              x2="251.984"
              y2="4.01572"
              stroke="#46415C"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <section className={styles.foodlist_container}>
          <FoodList onFoodList={getAmountHandler} refName={amountCartItem} />
        </section>
      </section>
    </>
  );
};

export default AvaliableFoods;
