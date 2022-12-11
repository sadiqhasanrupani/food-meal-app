import ReactDOM from "react-dom/client";

// Context Wrappers.
import { FoodContextProvider } from "./components/storage/food-context";
import { CartContextProvider } from "./components/storage/cart-context";

import "./styles/index.scss";
import App from "./App";

// context

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider> 
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </CartContextProvider>
);
