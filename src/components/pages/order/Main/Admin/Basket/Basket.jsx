import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function Basket() {
  const { basket, getTotalPrice } = useContext(OrderContext);

  //! State
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(getTotalPrice())} />
      {basket.length !== 0 ? <BasketBody basket={basket} /> : <EmptyBasket />}
      <Footer className={"footer-style"} />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
