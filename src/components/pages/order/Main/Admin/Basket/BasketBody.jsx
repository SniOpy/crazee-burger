import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function BasketBody({ basket }) {
  const { removeItem } = useContext(OrderContext);
  return (
    <BasketBodyStyled>
      {basket.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            onClick={() => removeItem(product)}
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


  padding: 20px 8.5px;
`;
