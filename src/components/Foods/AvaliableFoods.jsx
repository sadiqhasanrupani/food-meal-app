import React from "react";
import styles from "./AvaliableFoods.module.scss";

// Foods images.
import Sushi from "../../assets/Sushi.jpg";
import VegThukpa from "../../assets/VegThukpa.jpeg";
import LotusStem from "../../assets/CrispyHoneyLotusStem.jpg";
import ShreddedChicken from "../../assets/ShreddedChicken.jpg";
import DumBiriyani from "../../assets/DumBiriyani.jpeg";
import TangriChickenBiryani from "../../assets/ChickenBiryani.jpg";
import PrimaryBtn from "../UI/PrimaryBtn";

const AvaliableFoods = () => {
  const DUMMY_FOODS = [
    {
      id: 1,
      name: "Sushi",
      image: Sushi,
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Veg Thukpa",
      image: VegThukpa,
      description:
        "Tibetian noodles soup simmered in aromatic broth with vegetables, finished with crushed black pepper and coriander leaves",
      price: 220,
    },
    {
      id: 3,
      name: "Crispy Honey Lotus Stem (Chef's Special)",
      image: LotusStem,
      description: "Crispy lotus stems tossed with honey and chilli flakes ",
      price: 295.99,
    },
    {
      id: 4,
      name: "Shredded Chicken",
      image: ShreddedChicken,
      description:
        "Shredded crispy pieces of chicken tossed in sauce with bell peppers and spices",
      price: 290,
    },
    {
      id: 5,
      name: "Subz Dum Biryani",
      image: DumBiriyani,
      description:
        "Dum-cooked basmati rice in layers with herbs, spices & fried veggies!",
      price: 205,
    },
    {
      id: 6,
      name: "Tangri Chicken Biryani (2 pcs)",
      image: TangriChickenBiryani,
      description:
        "2 pieces of super soft charcoal grilled tangri chicken served with the mesmerizing aloo & layers of basmati rice.",
      price: 355,
    },
  ];
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
              stroke-width="8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {DUMMY_FOODS.map((food) => {
          return (
            <form>
              <section className={styles.food_items}>
                <div className={styles.image_items}>
                  <img src={food.image} alt="food_images" loading={"lazy"} />
                </div>
                <div className={styles.food_name}>
                  {food.name}
                  <div className={styles.food_price}>{"\u20B9"}{food.price}</div>
                  <div className={styles.food_description}>{food.description}</div>
                  <PrimaryBtn>Add cart</PrimaryBtn>
                </div>
              </section>
            </form>
          );
        })}
      </section>
    </>
  );
};

export default AvaliableFoods;
