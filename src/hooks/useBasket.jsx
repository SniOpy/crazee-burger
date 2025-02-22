import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  //! State
  const [basket, setBasket] = useState([]);

  //! comportements

  const addProductToCart = async (productAdded) => {
    const copyBasket = deepClone(basket);

    const updateCopyBasket = [productAdded, ...copyBasket];

    await setBasket(updateCopyBasket);
  };

  return { basket, addProductToCart };
};
