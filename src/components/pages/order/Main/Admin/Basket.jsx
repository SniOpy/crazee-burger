import React from 'react'
import { theme } from '../../../../../theme';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export default function Basket() {
  return (
    <BasketStyled className="basket">
            <div className="header">
              <div className="total">Total </div> 
              <div className="amount"> 0,00 €</div>
            </div>
            <div className="cart">
              <div className="contain-cart">Votre commande est vide.</div>
            </div>
            <div className="message-react">
              <div>Codé avec <span className="heart"><FaHeart />
              </span> et React.JS</div>
              </div>
          </BasketStyled>
  )
}


const BasketStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
    font-family: 'Amatic SC', cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    position:relative;

    .header{
      display:flex;
      justify-content: space-between;
      text-align: center;

      position:absolute;
      top:0;
      left:0;
      right: 0;
      height:70px;
      padding: 10px;

      background :${theme.colors.dark};
      color:${theme.colors.primary};
    }

    .cart {
      display:grid;
      justify-content: center;
      align-items: center;

      position:absolute;
      top:70px;
      left:0;
      right: 0;
      height: 694px;
      
      box-shadow: ${theme.shadows.strong};;
      background:${theme.colors.background_white};
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P4};
      line-height: 72px;
      letter-spacing: 0%;
      text-align: center;
    }

    .message-react {
      background:${theme.colors.dark};
      color:${theme.colors.white};
      position:absolute;
      bottom:0;
      left:0;
      right: 0;
      height:70px;

      display:grid;
      justify-content: center;
      align-items:center;
      font-weight: 700;
      font-size: 20px;
      line-height: 25.22px;
      letter-spacing: 0%;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};


      .heart{
        color: ${theme.colors.redSecondary}
      }
    }
`;