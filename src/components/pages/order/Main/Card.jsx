import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "./PrimaryButton";
export default function Card({ title, imageSource, leftDescription }) {
  return (
    <CardStyled className="card">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="leftDescription">{leftDescription}</div>
          <div className="rightDescription">
            <PrimaryButton className="primary-button" label="Ajouter" />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
   
      background: ${theme.colors.background_white};
      box-shadow: ${theme.shadows.strong};
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
        display:grid;

        .title {
            font-family: 'Amatic SC', cursive;
            font-size :36px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        .description {
          display:grid;
          grid-template-columns: 1fr 1fr ;
          align-items: center;

          .leftDescription {
            width: 100%;
            color:${theme.colors.primary};
            font-size: 16px;
            font-family: "Open Sans";
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
`;
