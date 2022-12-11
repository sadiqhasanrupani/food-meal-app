import React, { useContext } from "react";

// components
import FoodListItem from "./FoodListItem";

// Context
import FoodContext from "../storage/food-context";

const FoodList = (props) => {
  const ctx = useContext(FoodContext);
  return (
    <>
      {ctx.DUMMY_DATA.map((food) => {
        return (
          <FoodListItem
            id={food.id}
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            description={food.description}
          />
        );
      })}
    </>
  );
};

export default FoodList;
