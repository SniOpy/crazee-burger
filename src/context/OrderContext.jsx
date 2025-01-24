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
  newProduct: [],
  setNewProduct: () => {},
});
