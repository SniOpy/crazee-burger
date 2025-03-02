import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  //! State
  const [basket, setBasket] = useState([]);

  //! Fonction pour ajouter un produit dans le panier
  const addProductToCart = (event, productAdded) => {
    event.stopPropagation();
    const copyBasket = deepClone(basket);

    // // On cherche si le produit ajouté existe déjà dans le panier
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
      const updateCopyBasket = [productAdded, ...copyBasket];

      setBasket(updateCopyBasket);
    }
  };
  //! Fonction pour supprimer un produit dans le panier
  const removeItem = (productDeleted) => {
    const copyBasket = deepClone(basket);

    const basketUpdated = copyBasket.filter(
      (item) => item.id !== productDeleted.id
    );
    setBasket(basketUpdated);
  };
  //! Fonction pour calculer le montant dans le panier
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
    removeItem,
  };
};
