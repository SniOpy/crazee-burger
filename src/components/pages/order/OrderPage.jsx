import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  //! state
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productClicked, setProductClicked] = useState("");

  const titleCardRef = useRef();

  //! comportements

  const handleDelete = (productId) => {
    // 1. copie du state
    const menuCopy = deepClone(menu);

    // 2. manipulation de la copie
    const menuUpdated = menuCopy.filter((product) => product.id !== productId);

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

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    addProduct,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productClicked,
    setProductClicked,
    handleEdit,
    titleCardRef,
  };

  //! affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
