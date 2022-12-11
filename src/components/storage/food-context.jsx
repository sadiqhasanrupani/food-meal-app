import { createContext, useState } from "react";

// Foods images.
import Sushi from "../../assets/Sushi.jpg";
import VegThukpa from "../../assets/VegThukpa.jpeg";
import LotusStem from "../../assets/CrispyHoneyLotusStem.jpg";
import ShreddedChicken from "../../assets/ShreddedChicken.jpg";
import DumBiriyani from "../../assets/DumBiriyani.jpeg";
import TangriChickenBiryani from "../../assets/ChickenBiryani.jpg";

const FoodContext = createContext({
  DUMMY_DATA: [],
  onShowCart: () => {},
  onHideCart: () => {},
  isShowCart: false,
  hideHandler: () => {},
});

export const FoodContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const DUMMY_FOODS = [
    {
      id: 1,
      name: "Sushi",
      image: Sushi,
      description: "Finest fish and veggies",
      price: 229,
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
      name: "Crispy Honey Lotus Stem",
      image: LotusStem,
      description: "Crispy lotus stems tossed with honey and chilli flakes ",
      price: 299,
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
      name: "Tangri Chicken Biryani",
      image: TangriChickenBiryani,
      description:
        "2 pieces of super soft charcoal grilled tangri chicken served with the mesmerizing aloo & layers of basmati rice.",
      price: 355,
    },
  ];

  const foodValues = {
    DUMMY_DATA: DUMMY_FOODS,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
    isShowCart: showCart,
    hideHandler: hideCartHandler,
  };
  return (
    <FoodContext.Provider value={foodValues}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
