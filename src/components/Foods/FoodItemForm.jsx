import { useCallback, useReducer, useRef } from "react";
import styles from "./FoodItemForm.module.scss";

// UI components
import GreenBtn from "../UI/Buttons/GreenBtn";
import RedBtn from "../UI/Buttons/RedBtn";
import Input from "../UI/Input/Input";
import PrimaryBtn from "../../components/UI/Buttons/PrimaryBtn";

const FoodItemForm = (props) => {
  const inputAmount = useRef();

  const initialValue = { val: 1, amountIsValid: false, inputValue: 1 };

  const inputReducer = (state, action) => {
    if (action.type === "FALSE") {
      return { val: state.val, amountIsValid: action.isValid };
    }
    if (action.type === "ADD") {
      let updatedValue = +action.inputVal;
      updatedValue = updatedValue + 1;
      inputAmount.current.value = updatedValue;
      return { inputValue: action.inputVal };
    }
    if (action.type === "REMOVE") {
      let updatedValue = +action.inputVal;
      updatedValue = updatedValue - 1;
      inputAmount.current.value = updatedValue;
      return { inputVal: updatedValue };
    }
    if (action.type === "RESET") {
      let updatecdValue = +action.inputVal;
      updatecdValue = 1;
      inputAmount.current.value = updatecdValue;
      return { inputAmount: updatecdValue };
    }
  };

  const [amountState, dispatchAmountAction] = useReducer(
    inputReducer,
    initialValue
  );

  // const { inputVal } = amountState;

  const { amountIsValid: isValid } = amountState;

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputAmount.current.value;
    const enteredNumberAmount = +enteredAmount;
    props.onFoodItemForm(enteredNumberAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredNumberAmount > 5 ||
      enteredNumberAmount < 1
    ) {
      dispatchAmountAction({ type: "FALSE", isValid: true });
      return;
    }

    dispatchAmountAction({
      type: "RESET",
      inputVal: inputAmount.current.value,
    });
  };

  const addEventHandler = useCallback(() => {
    dispatchAmountAction({ type: "ADD", inputVal: inputAmount.current.value });
  }, [inputAmount]);

  const removeEventHandler = useCallback(() => {
    dispatchAmountAction({
      type: "REMOVE",
      inputVal: inputAmount.current.value,
    });
  }, []);

  return (
    <form onSubmit={submitHandler}>
      <section
        className={styles.food_items}
        id={styles.foodItems}
        key={props.id}
      >
        <div className={styles.image_items}>
          <img src={props.image} alt="food_images" loading={"lazy"} />
          <div className={styles.cart_hover_btn}>
            <PrimaryBtn className={styles.primary_btn_hover}>
              Add cart
            </PrimaryBtn>
          </div>
        </div>
        <div className={styles.food_details}>
          <div className={styles.food_name}>
            {props.name}
            <div className={styles.food_price}>
              {"\u20B9"}
              {props.price}
            </div>
            <div className={styles.food_description}>{props.description}</div>
            <div className={styles.buttons}>
              <RedBtn
                className={`${styles["red_btn"]} ${styles["btn_position"]}`}
                RedBtn={{ type: "button", onClick: removeEventHandler }}
              >
                -
              </RedBtn>
              <Input
                className={`${styles.amount} ${styles["btn_position"]}`}
                Input={{
                  ref: inputAmount,
                  type: "number",
                  min: "1",
                  step: "1",
                  max: "5",
                  defaultValue: "1",
                }}
              />
              <GreenBtn
                className={`${styles["green_btn"]} ${styles["btn_position"]}`}
                GreenBtn={{ type: "button", onClick: addEventHandler }}
              >
                +
              </GreenBtn>
              <PrimaryBtn
                className={styles.PrimaryBtn}
                PrimaryBtn={{ type: "submit" }}
              >
                Add cart
              </PrimaryBtn>
            </div>
            {isValid && <p>please enter a valid amount (1 to 5) </p>}
          </div>
        </div>
      </section>
    </form>
  );
};

export default FoodItemForm;
