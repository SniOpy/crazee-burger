import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  //! State
  const [basket, setBasket] = useState([]);

  //! Fonction pour ajouter un produit dans le panier
  const addProductToCart = (productAdded) => {
    // On clone le panier pour ne pas muter directement le state
    const copyBasket = deepClone(basket);

    // On cherche si le produit ajouté existe déjà dans le panier
    const existingIndex = copyBasket.findIndex(
      (item) => item.id === productAdded.id
    );

    if (existingIndex !== -1) {
      // Le produit existe, on incrémente la quantité

      copyBasket[existingIndex].quantity += 1;
      // On met à jour le state
      setBasket(copyBasket);
    } else {
      // Le produit n'existe pas, on l'ajoute
      productAdded.quantity = 1;
      // copyBasket.push(productAdded);
      const updateCopyBasket = [productAdded, ...copyBasket];

      setBasket(updateCopyBasket);
    }
  };

  const getTotalPrice = () => {
    return basket.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  };

  //! On retourne ce dont on a besoin dans le composant qui utilise ce hook
  return {
    basket, // tableau des produits
    addProductToCart,
    getTotalPrice,
  };
};
