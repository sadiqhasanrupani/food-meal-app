import React, { createContext, useCallback, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  onOrder: () => {},
  isShowOrder: false,
  onHideOrder: () => {},
  isShowCart: false,
  hideHandler: () => {},
  onShowCart: () => {},
  onHideCart: () => {},
});

const initialValue = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    /**  if the added item is existed in the cartItem then if will give us the index
     * of that items else it will return -1 means nothing is there **/
    const exisitingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    /** This will stores the the exisiting item object if there is not an existing
     * object that it will return "undefined" **/
    const existingCartItem = state.items[exisitingCartItemIndex];

    // creating updatedItems
    let updatedItems;

    // if there is object in the existingCartItem than it will go in this block
    if (existingCartItem) {
      // If there is an exisiting items then we need to add the qty of that exisiting
      // item but not to render same item again.
      // that why we are storing it in a updatedItem.
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // we are now storing the existed items in a new array
      updatedItems = [...state.items];
      /**  after figuring out that the exisited item is found, we will overwrite that
       * item with our newly created updatedItem
       * means we overwrite that existing item and then update the amount section.**/
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "ORDER") {
    return initialValue;
  }

  return initialValue;
};

export const CartContextProvider = (props) => {
  const [isShowOrder, setIsShowOrder] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialValue);

  // const { item, totalAmount } = cartState;

  const addCartHandler = useCallback((item) => {
    dispatchCartAction({ type: "ADD_CART", item: item });
  }, []);

  const RemoveCartHandler = useCallback((id) => {
    dispatchCartAction({ type: "REMOVE_CART", id: id });
  }, []);

  const onHideOrderModel = useCallback(() => {
    setIsShowOrder(false);
  }, []);

  const showCartHandler = useCallback(() => {
    setShowCart(true);
  }, []);

  const hideCartHandler = useCallback(() => {
    setShowCart(false);
  }, []);

  const orderHandler = useCallback(() => {
    dispatchCartAction({ type: "ORDER" });
    setIsShowOrder(true);
    setShowCart(false);
  }, []);

  const contextValues = {
    items: cartState.items,
    addItem: addCartHandler,
    removeItem: RemoveCartHandler,
    totalAmount: cartState.totalAmount,
    onOrder: orderHandler,
    isShowOrder: isShowOrder,
    onHideOrder: onHideOrderModel,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
    isShowCart: showCart,
    hideHandler: hideCartHandler,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
