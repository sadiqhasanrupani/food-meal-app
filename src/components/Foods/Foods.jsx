import React from "react";

// Food Components
import AvaliableFoods from "./AvaliableFoods";
import FoodSummary from "./FoodSummary";

// Meals style
import styles from "./Foods.module.scss";

const Foods = () => {
  return (
    <>
      <div>
        <FoodSummary />
      </div>
      <div className={styles.food_container}>
        <AvaliableFoods />
      </div>
    </>
  );
};

export default Foods;
