import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../../utils/maths";
import { theme } from "../../../../../../theme";

export default function ProductCard({product}) {
  return (
    <ProductCardStyled key={product.id}>
      <div className="right-side">
        <img className="image" src={product.imageSource} alt="" />
      </div>
      <div className="left-side">
        <div className="infos">
          <div className="title">{product.title}</div>
          <div className="price">{formatPrice(product.price)}</div>
        </div>
        <div className="quantity">x 13</div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  height: 86px;
  margin: 20px 16px;
  border-radius: 5px;
  padding: 8px 16px;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);

  .right-side {
    display: flex;
    justify-content: center;

    .image {
      width: 86.5px;
      height: 70px;
      object-fit: contain;
      object-position: center;
    }
  }
  .left-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200.2px;
    gap: 10.95px;

    .infos {
      padding-left: 10px;
      .title {
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0%;
      }
    }

    .quantity {
      margin-right: 16px;
    }
    .price,
    .quantity {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 15px;
      line-height: 20.43px;
      letter-spacing: 0%;
      color: rgba(255, 160, 27, 1);
    }
  }
`;
