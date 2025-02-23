import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  //! State
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);

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
    } else {
      // Le produit n'existe pas, on l'ajoute
      productAdded.quantity = 1;
      copyBasket.push(productAdded);
    }


    // On met à jour le state
     setBasket(copyBasket);

    
  };

  //! On retourne ce dont on a besoin dans le composant qui utilise ce hook
  return {
    basket,  // tableau des produits
    count,   // nombre total d'articles
    addProductToCart,
  };
};
