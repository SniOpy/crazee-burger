import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function OrderPage() {

  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <div className="main">Main</div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;


  .container {
    background:red;
    height:95vh;
    width: 1400px;
  }

  .navbar{
    background: blue;
    display:flex;
    justify-content: space-between;
  }
  .main{
    background: green;
  }
`;
