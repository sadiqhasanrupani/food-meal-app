import React, { useContext } from "react";

import styles from "./FoodList.module.scss";

import PrimaryBtn from "../../components/UI/Buttons/PrimaryBtn";
import GreenBtn from "../UI/Buttons/GreenBtn";
import RedBtn from "../UI/Buttons/RedBtn";
import Input from "../UI/Input/Input";

// Context
import FoodContext from "../storage/food-context";

const FoodList = () => {
  const ctx = useContext(FoodContext);
  return (
    <>
      {ctx.DUMMY_DATA.map((food) => {
        return (
          <form key={food.id}>
            <section className={styles.food_items}>
              <div className={styles.image_items}>
                <img src={food.image} alt="food_images" loading={"lazy"} />
                <div className={styles.cart_hover_btn}>
                  <PrimaryBtn className={styles.primary_btn_hover}>
                    Add cart
                  </PrimaryBtn>
                </div>
              </div>
              <div className={styles.food_details}>
                <div className={styles.food_name}>
                  {food.name}
                  <div className={styles.food_price}>
                    {"\u20B9"}
                    {food.price}
                  </div>
                  <div className={styles.food_description}>
                    {food.description}
                  </div>
                  <div className={styles.buttons}>
                    <GreenBtn
                      className={styles["green_btn"]}
                      GreenBtn={{ type: "button" }}
                    >
                      +
                    </GreenBtn>
                    <Input
                      className={styles.amount}
                      Input={{
                        id: `amount`,
                        type: "text",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                      }}
                    />
                    <RedBtn
                      className={styles["red_btn"]}
                      RedBtn={{ type: "button" }}
                    >
                      -
                    </RedBtn>
                  <PrimaryBtn className={styles.PrimaryBtn}>
                    Add cart
                  </PrimaryBtn>
                  </div>
                </div>
              </div>
            </section>
          </form>
        );
      })}
    </>
  );
};

export default FoodList;
