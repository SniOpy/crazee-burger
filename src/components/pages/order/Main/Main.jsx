import styled from "styled-components";
import { theme } from "../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
export default function Main() {

    
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu/>
        <Admin/>
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
  }
`;