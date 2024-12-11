import styled from "styled-components";
import { theme } from "../../../theme";
import {fakeMenu2} from '../../../../fakeData/fakeMenu'
import { useState } from "react";
import Card from "./Card";
import { formatPrice } from "../../../../utils/maths";
export default function Main() {

    const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu">

        {menu.map(({id,title, imageSource,price}) => {
          return (
            <Card 
            imageSource={imageSource} title={title} leftDescription={formatPrice(price)} key={id}/>
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
  }
`;