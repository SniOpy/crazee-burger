import React from 'react'
import { theme } from '../../../../../../theme';
import styled from 'styled-components';
import Header from './Header';

export default function Basket() {
  return (
    <BasketStyled className="basket">
            <Header amountToPay={15}/>
            <div className="cart">
              <div className="contain-cart">Votre commande est vide.</div>
            </div>
            <div className="message-react">
              <div>Codé avec ❤️ et React.JS</div>
            </div>
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

    .message-react {
      background:${theme.colors.background_dark};
      color:${theme.colors.white};

      height: 70px; 
      display:flex;
      justify-content: center;
      align-items: center;

      font-size: ${theme.fonts.size.P3};

      border-bottom-left-radius: ${theme.borderRadius.extraRound}
    }

    
`;