import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function BasketBody({ basket }) {
  return (
  <BasketBodyStyled>
    {basket.map((product) => {console.log(product)})}
  </BasketBodyStyled>
  )

}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
`;
