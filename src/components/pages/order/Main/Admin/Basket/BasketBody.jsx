import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function BasketBody({ basket }) {
  const { removeItem,isModeAdmin, setProductClicked, productClicked } = useContext(OrderContext);

 const handleDelete = (event, productDeleted ) => {
  event.stopPropagation();

  removeItem(productDeleted);
 }

 const handleClick = (idCardBasket) => {

  const productSelectedInBasket = basket.find((product) => product.id === idCardBasket)
  setProductClicked(productSelectedInBasket);
  
 }

 const checkIfItemSelectedInBasket = (idItem, idProductSelected) => {
  return idItem === idProductSelected
 }
  return (
    <BasketBodyStyled>
      {basket.map((product) => {

        return (
          <ProductCard
            product={product}
            key={product.id}
            onRemove={(event) => handleDelete(event,product)}
            onClick={() => handleClick(product.id)}
            isClickable={isModeAdmin}
            isSelected={checkIfItemSelectedInBasket(product.id, productClicked.id)}

          />
        );
      })}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  height: 600px;
  width: 333px;

  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;


  padding: 20px 8.5px;
`;
