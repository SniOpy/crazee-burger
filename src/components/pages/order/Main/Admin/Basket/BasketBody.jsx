import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      {/* <EmptyBasket/> */}
      <div className="products">
        <div className="left-side">
          <img
            className="image"
            src="../../../../../../../public/images/burger3.png"
            alt="IMAGE"
          />
        </div>

        <div className="right-side">
          <div className="information">
            <div className="title">BURGER SMOKE BBQ</div>
            <div className="price">5,60 €</div>
          </div>
          <div className="quantity">x 13</div>
        </div>
      </div>

      <div className="products">
        <div className="left-side">
          <img
            className="image"
            src="../../../../../../../public/images/burger3.png"
            alt="IMAGE"
          />
        </div>

        <div className="right-side">
          <div className="information">
            <div className="title">BURGER SMOKE BBQ</div>
            <div className="price">5,60 €</div>
          </div>
          <div className="quantity">x 13</div>
        </div>
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 16px;
  box-shadow: ${theme.shadows.strong};
  color: ${theme.colors.greyBlue};
  height: 778.69px;
  overflow-y: scroll;
  padding-top: 10px;

  .products {
    display: flex;
    box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);
    margin: 10px 16px;
    border-radius: 5px;
    padding: 8px 16px;
    width: 318px;

    .left-side {
      .image {
        object-fit: contain;
        object-position: center;
        height: 75px;
        width: 85px;
      }
    }

    .right-side {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .information {
        display: flex;
        flex-direction: column;
        gap: 5px 10px;
        padding-left: 21px;

        .title {
          font-family: Amatic SC;
          font-weight: 700;
          font-size: 24px;
          color: rgba(23, 22, 26, 1);
        }

        .quantity {
          margin-right: 25px;
        }
      }

      .price,
      .quantity {
        font-family: Open Sans;
        font-weight: 400;
        font-size: 15px;
        color: rgba(255, 160, 27, 1);
      }
    }
  }
`;
