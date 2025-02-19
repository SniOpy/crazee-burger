import styled from 'styled-components';
import { theme } from '../../../../../../theme';


export default function EmptyBasket() {
  return (
    <EmptyBasketStyled >
        <div>Votre commande est vide.</div>
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
      
`;