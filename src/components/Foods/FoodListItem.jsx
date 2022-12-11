import React, { useContext } from "react";

import FoodItemForm from "./FoodItemForm";

import CartContext from "../storage/cart-context";

const FoodListItem = (props) => {
  const cartCtx = useContext(CartContext);

  const getAmountHandler = (amountData) => {

    console.log(props.id, props.name, props.price, amountData)

    cartCtx.addItem({
      id: props.id,
      image: props.image,
      name: props.name,
      price: props.price,
      amount: amountData,
    });
  };
  return (
    <FoodItemForm
      onFoodItemForm={getAmountHandler}
      id={props.id}
      image={props.image}
      name={props.name}
      price={props.price}
      description={props.description}
    />
  );
};

export default FoodListItem;
