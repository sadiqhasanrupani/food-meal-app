import React from "react";
import styles from "./AvaliableFoods.module.scss";

// Foods images.
import Sushi from "../../assets/Sushi.jpg";
import VegThukpa from "../../assets/VegThukpa.jpeg";
import LotusStem from "../../assets/CrispyHoneyLotusStem.jpg";
import ShreddedChicken from "../../assets/ShreddedChicken.jpg";
import DumBiriyani from "../../assets/DumBiriyani.jpeg";
import TangriChickenBiryani from "../../assets/ChickenBiryani.jpg";

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
      <section className={styles.food_container}>
        {DUMMY_FOODS.map((food) => {
          return (
            <>
              <li>{food.name}</li>
              {/* <img src={food.image} alt="" /> */}
            </>
          );
        })}
      </section>
    </>
  );
};

export default AvaliableFoods;
