import React, { Fragment as Frag } from "react";
import { createPortal } from "react-dom";
import styles from "./FoodSummary.module.scss";

const MealSummary = () => {
  return (
    <section className={styles.summaryContent}>
      <h2>Delicious Food, Delivers you the energy to code in React!</h2>
      <p>
        Choose your favorite meal from our broad slection of avaliable meals and
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

const FoodSummary = () => {
  return (
    <>
      {createPortal(<MealSummary />, document.querySelector("#food-summary"))}
    </>
  );
};

export default FoodSummary;
