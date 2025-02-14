import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../context/OrderContext"
import { theme } from "../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu"
import { FaHeart } from "react-icons/fa"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled className="main">
      <div className="basket">
        <div className="total">Total 0,00 €</div>
        <div className="contain-cart">Votre commande est vide</div>
        <div className="message-react">Codé avec <span className="heart"><FaHeart /></span> et React.JS</div>
      </div>
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

  .basket {
    background: pink;
    .total {
      border: 1px solid black;
    }
    .contain-cart {
      border: 1px solid red;
    }
    .message-react {
      border: 1px solid blue;
      position: relative;
      bottom:0;
      left:0;
      right:0;
    }
  }

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`
