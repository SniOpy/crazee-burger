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
        <div className="header">
          <div className="total">Total </div> 
          <div className="amount"> 0,00 €</div>
        </div>
        <div className="contain-cart">
          <span>Votre commande est vide.</span>
        </div>
        <div className="message-react"><span>Codé avec <span className="heart"><FaHeart /></span> et React.JS</span></div>
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
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    font-family: 'Amatic SC', cursive;
    font-size: 36px;
    font-weight: 400;
    position:relative;

    .header{
      background :red;
      display:grid;
      grid-template-columns: 1fr 1fr;
      position:absolute;
      top:0;
      left:0;
      right: 0;
      height:70px;
    }

    .contain-cart {
      background:blue;
      position:absolute;
      top:70px;
      left:0;
      right: 0;
      height: 694px;
    }

    .message-react {
      background:green;
      position:absolute;
      bottom:0;
      left:0;
      right: 0;
      height:70px;
    }

    /* .header{
      width: 350px;
      height:70px;
      display:flex;
      justify-content: space-between;
      align-items: center;

      background:black;
      color:orange;
      padding:0 10px;
      }

    .contain-cart {
      top:10%;
      height: 100%;
      right:0;            
      left:0;

      display:flex;
      justify-content: center;
      align-items: center;

      box-shadow: ${theme.shadows.strong};
      color:#747B91;
      background: white;
    }
      
    .message-react {
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      background: black;
      display:flex;
      justify-content: center;
      align-items: center;


      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      color:#fff;
      height: 10%;
      font-size: 25px;
      font-weight: 700px;
      
      .heart {
        color:red;
      } 

    }  */
  }

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`
