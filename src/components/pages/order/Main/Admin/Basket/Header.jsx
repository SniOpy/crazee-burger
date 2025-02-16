import styled from 'styled-components';
import {formatPrice} from '../../../../../../utils/maths'
import { theme } from '../../../../../../theme';

export default function Header({amountToPay}) {
  return (
    <HeaderStyled className="header">
              <div className="total">Total </div> 
              <div className="amount"> {formatPrice(amountToPay)}</div>
            </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  background:${theme.colors.background_dark};
      color:${theme.colors.primary};

      display:flex;
      justify-content: space-between;
      align-items: center;
      padding : 0 16px;
      height: 70px;
`;
