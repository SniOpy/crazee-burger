import React, { useState } from "react";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import Footer from "./Footer";
import Total from "./Total";
import BasketBody from "./BasketBody";
import { fakeBasket } from "../../../../../../fakeData/fakeBasket";

export default function Basket() {
  const [orders, setOrders] = useState(fakeBasket.SMALL);

  return (
    <BasketStyled>
      <Total amountToPay={5.3655} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  position: relative;
`;
