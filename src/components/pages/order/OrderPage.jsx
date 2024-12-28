import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main/Main";
import { theme } from "../../theme";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";

export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(true);

  const orderContextValue = {
    isModeAdmin, 
    setIsModeAdmin
  }
  

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar  />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

    .container {
    height:95vh;
    width: 1400px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius:${theme.borderRadius.extraRound};
  }
`;


