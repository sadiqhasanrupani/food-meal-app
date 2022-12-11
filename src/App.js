import React, { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";

// components
import Header from "./components/Layout/Header/Header";

//styles
import styles from "./styles/App.module.scss";

//context
import OrderModelPortal from "./components/UI/model/OrderModel";
import CartContext from "./components/storage/cart-context";

const App = () => {
  const cartCtx = useContext(CartContext)
  return (
    <>
      {cartCtx.isShowOrder && <OrderModelPortal/>}
      <div className={styles.sticky}>
        {cartCtx.isShowCart && <Cart />}
        <div className={styles.header}>
          <Header />
          <main>
            <Foods />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
