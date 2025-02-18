
import styled from 'styled-components';
import EmptyBasket from './EmptyBasket';
import { theme } from '../../../../../../theme';

export default function BasketBody() {
  return (
    <BasketBodyStyled className="cart">
        {/* <EmptyBasket/> */}
        <div className="products">
          <div className="image">Image</div>
          <div className="body">
            <div className="title">Title</div>
            <div className="price">Price</div>
          </div>
          <div className="quantity">Quantity</div>
        </div>
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
     flex:1;
     display:flex;
     justify-content: center;
     align-items: center; 
     box-shadow: ${theme.shadows.strong};
      color: ${theme.colors.greyBlue};

      .products {
        border:1px solid red;
        flex:1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

      }

      .body {
        
      }

      
`;
