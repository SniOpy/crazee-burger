import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  setMenu: () => {},
  resetMenu: () => {},
  addProduct: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  newProduct: [],
  setNewProduct: () => {},

  setProductSelected: () => {},
  productSelected: [],
  titleCardRef: {},

  basket: [],
  addProductToCart: () => {},
  getTotalPrice: () => {},
  removeItem: () => {},
});
