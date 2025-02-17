
import styled from 'styled-components';
import EmptyBasket from './EmptyBasket';
import { theme } from '../../../../../../theme';

export default function BasketBody() {
  return (
    <BasketBodyStyled className="cart">
        <EmptyBasket/>
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
     flex:1;
     display:flex;
     justify-content: center;
     align-items: center; 
     box-shadow: ${theme.shadows.strong};
      color: ${theme.colors.greyBlue}
`;
