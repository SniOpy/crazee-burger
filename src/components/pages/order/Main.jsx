import styled from "styled-components";
import { theme } from "../../theme";
import {fakeMenu1} from '../../../fakeData/fakeMenu'
import { useState } from "react";

export default function Main() {

    const [menu, setMenu] = useState(fakeMenu1)
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu">
          {menu.map((product) => {
            return (
            <h2 key={product.id}>
              {product.title}
            </h2>)
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
  display: grid;
    grid-template-columns: 1fr;
  /* grid-template-columns: 25% 1fr; */
  overflow-y: scroll;

  .basket {
    border: 2px solid purple;
   background: pink;
  }
  .menu {
    border: 2px solid purple;
    background: purple;
  }
`;