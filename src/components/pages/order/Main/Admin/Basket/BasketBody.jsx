
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function BasketBody() {
  return (
    <BasketBodyStyled className="cart">
        <div className="contain-cart">Votre commande est vide.</div>
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
