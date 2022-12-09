import ReactDOM from "react-dom/client";
import { FoodContextProvider } from "./components/storage/food-context";

import "./styles/index.scss";
import App from "./App";

// context

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>
);
