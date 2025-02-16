import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../context/OrderContext"
import { theme } from "../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu"
import Basket from "./Admin/Basket/Basket"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled className="main">
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 1fr 3fr;

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`
