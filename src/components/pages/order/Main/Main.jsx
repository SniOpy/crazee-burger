import styled from "styled-components";
import { theme } from "../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
export default function Main() {

  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 800px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};
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
  }
`;