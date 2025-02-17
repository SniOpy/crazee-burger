import styled from 'styled-components';
import { theme } from '../../../../../../theme';


export default function EmptyBasket() {
  return (
    <EmptyBasketStyled >
        Votre commande est vide.
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`

      
`;