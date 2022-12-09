import React from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";

// components
import Header from "./components/Layout/Header/Header";

//styles
import "./styles/App.scss";

const App = () => {
  return (
    <>
      {/* <Cart /> */}
      <Header />
      <main>
        <Foods />
      </main>
    </>
  );
}

export default App;
