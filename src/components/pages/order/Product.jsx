import styled from "styled-components";
import { theme } from "../../theme";

export default function Product({title, imageSource, price}) {
  return (
            <ProductStyled className="product">
              <div className="image">
                <img src={imageSource} alt={title} />
              </div>
              <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                  <div className="price">{price} €</div>
                  <button className="add-button">Ajouter</button>
                </div>
              </div>
            </ProductStyled>
  )
}

const ProductStyled = styled.div`
   
      background: ${theme.colors.background_white};
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      border-radius: ${theme.borderRadius.round};
      width:200px;
      height:300px;
      display: grid;
      grid-template-rows: 65% 1fr;
      padding: 20px;
      padding-bottom: 10px;

      .image {
        width: 100%;
        margin-top: 30px;
        img{
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }

      .info-text {
        border: 1px solid green;
      }
`;
