import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { fakeBasket } from "../../../../../../fakeData/fakeBasket";
import { useContext, useState } from "react";
import EmptyBasket from "./EmptyBasket";
import Product from "./Product";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketBody() {
  const {
      isModeAdmin,
    } = useContext(OrderContextF);
  const [orders, setOrders] = useState(fakeBasket.LARGE);
  

  return (
    <BasketBodyStyled>
      {orders ? (
        orders.map((order) => {
          return (
            <Product order={order} isHoverable={isModeAdmin}/>
          );
        })
      ) : (
        <EmptyBasket />
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 16px;
  box-shadow: ${theme.shadows.strong};
  color: ${theme.colors.greyBlue};
  height: 668.9px; //! initialement 694.69px
  overflow-y: scroll;
  padding-top: 10px;
  padding-bottom: 10px;
  
`;

