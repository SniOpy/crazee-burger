import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  //! comportements

  const handleDelete = (productDeleted) => {
    // 1. copie du state
    const menuCopy = deepClone(menu);

    // 2. manipulation de la copie
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== productDeleted.id
    );

    // 3. update du state
    setMenu(menuUpdated);
  };

  const handleEdit = (productEdited) => {
    //1. copy state
    const menuCopy = deepClone(menu);

    // 2. State manipulation
    const productIndex = menuCopy.findIndex(
      (product) => product.id === productEdited.id
    );

    menuCopy[productIndex] = productEdited;

    // 3. State update
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const addProduct = (newProduct) => {
    //1. Copie du state
    const copyMenu = deepClone(menu);

    //2. Manipulation du state
    const updatedMenu = [newProduct, ...copyMenu];

    //3. Nouveau state
    setMenu(updatedMenu);
  };

  return { menu, setMenu, handleDelete, handleEdit, resetMenu, addProduct };
};
