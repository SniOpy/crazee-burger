import React from 'react'
import { theme } from '../../../../../../theme';
import styled from 'styled-components';
import Footer from './Footer';
import Total from './Total';
import BasketBody from './BasketBody';

export default function Basket() {


  return (
    <BasketStyled className="basket">
            <Total amountToPay={5.3655}/>
            <BasketBody/>
            <Footer/>
          </BasketStyled>
  )
}


const BasketStyled = styled.div`
    /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
    font-family: 'Amatic SC', cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    display:flex;
    flex-direction: column;

    
    .cart  {
      flex:1;
      display:flex;
      justify-content: center;
      align-items: center;
      box-shadow: ${theme.shadows.strong};
      color: ${theme.colors.greyBlue}
    }
`;