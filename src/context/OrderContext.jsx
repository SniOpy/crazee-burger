import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  resetMenu: () => {},
  addProduct: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  newProduct: [],
  setNewProduct: () => {},

  setProductSelected: () => {},
  productSelected: [],
});
