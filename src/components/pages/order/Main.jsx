import styled from "styled-components";
import { theme } from "../../theme";
import {fakeMenu2} from '../../../fakeData/fakeMenu'
import { useState } from "react";

export default function Main() {

    const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu">

        {menu.map((product) => {
          return (
          <div className="card" key={product.id}>
            <div className="product">{product.title}</div>
           </div>
          )
        })}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 800px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
 
  /* grid-template-columns: 25% 1fr; */
  overflow-y: scroll;



  .basket {
    border: 1px solid purple;
  }
  .menu {
    
    border: 1px solid pink;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;

    .product {
      background: ${theme.colors.background_white};
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      border-radius: ${theme.borderRadius.round};
      width:240px;
      height:330px;
    }
  }
`;