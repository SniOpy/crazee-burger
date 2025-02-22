import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import ProductCard from "./ProductCard.jsx";

export default function BasketBody({ basket }) {
  return (
    <BasketBodyStyled>
      {basket.map((product) => {
        return <ProductCard product={product} />;
      })}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  height: 694.94px;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;
`;
