import styled from "styled-components"
import Total from "./Total"
import { formatPrice } from "../../../../../../utils/maths"
import Footer from "./Footer"
import {fakeBasket} from "../../../../../../fakeData/fakeBasket"
import EmptyBasket from "./EmptyBasket"
import { useState } from "react"
import BasketBody from "./BasketBody"

export default function Basket() {

  //! State 
  const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);
  
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
       {basket ? <BasketBody basket={basket}/> : <EmptyBasket />}
      <Footer className={"footer-style"}/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`
