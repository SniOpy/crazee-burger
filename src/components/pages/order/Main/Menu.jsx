import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./Admin/Empty/EmptyMenu/EmptyMenuAdmin";
import EmptyMenuClient from "./Admin/Empty/EmptyMenu/EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productClicked,
    setProductClicked,
    setIsCollapsed,
    setCurrentTabSelected,
    titleCardRef,
    addProductToCart,
    removeItem,
  } = useContext(OrderContext);

  const selectedProduct = async (idCardSelected) => {
    // if admin is false, we leave
    if (!isModeAdmin) return;

    // AdminTab is not collapsed & the current Tab on "edit"
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productSelected = menu.find(
      (product) => product.id === idCardSelected
    );
    await setProductClicked(productSelected);
    titleCardRef.current.focus();
  };

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const checkIfProductSelected = (idProductInMenu, idProductClickedOn) => {
    return idProductInMenu === idProductClickedOn;
  };

  const handleCardDelete = (event, idProduct) => {
    event.stopPropagation();
    handleDelete(idProduct);
    removeItem(idProduct);
    idProduct === productClicked.id && setProductClicked("");
  };

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        const product = { id, title, imageSource, price };
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, product)}
            onClick={() => selectedProduct(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductSelected(id, productClicked.id)}
            handleAdd={(event) => addProductToCart(event, product)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
