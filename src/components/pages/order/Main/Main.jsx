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
      {/* <div className="basket">
        Basket
      </div> */}
      <div className="menu-and-admin">
        <div className="menu">
          {menu.map(({id,title, imageSource,price}) => {
            return (
              <Card
              imageSource={imageSource} title={title} leftDescription={formatPrice(price)} key={id}/>
            )
          })}
        </div>
        <div className="admin">
          Admin
        </div>
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



  .basket {
    background: pink;
  }

  .menu {
    border: 1px solid pink;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
  }
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius:${theme.borderRadius.extraRound};

    .admin {
    background: red;
    position: absolute;
    height: 250px;
    bottom:0;
    left: 0;
    right:0;
    
  }
  }
  
`;