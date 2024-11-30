import styled from "styled-components";
import { theme } from "../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="container">
        <div className="item">
          <img src="/images/burger1.png" alt="photo" />
          <h2 className="item-title">Title</h2>
          <p>Prix</p>
          <button>Ajouter</button>
        </div>
        <div className="item">
          <img src="" alt="photo" />
          <h2 className="item-title">Title</h2>
          <p>Prix</p>
          <button>Ajouter</button>
        </div>
        <div className="item">
          <img src="" alt="photo" />
          <h2 className="item-title">Title</h2>
          <p>Prix</p>
          <button>Ajouter</button>
        </div>
        <div className="item">
          <img src="" alt="photo" />
          <h2 className="item-title">Title</h2>
          <p>Prix</p>
          <button>Ajouter</button>
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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ; 
  }                          

  .item {
    border: 1px solid red;
    width: 240px;
    height: 330px;
    display: flex;
    justify-content: center;  
    align-items: center;    
    flex-direction:column;
  }

  img{
    width: 200px;
    height: 145px;
    object-fit: contain;
    object-position: center;
  }
 
`;