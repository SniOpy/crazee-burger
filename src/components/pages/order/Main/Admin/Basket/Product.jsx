import React from "react";
import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../../utils/maths";
import { IoTrashBin } from "react-icons/io5";

export default function Product({ order, isHoverable }) {
  return (
    <ProductStyled $isHoverable={isHoverable}>
      <div className="left-side">
        <img className="image" src={order.imageSource} alt={order.title} />
      </div>

      <div className="right-side">
        <div className="information">
          <div className="title">{order.title}</div>
          <div className="price">{formatPrice(order.price)}</div>
        </div>
        <div className="quantity">x 13</div>
        <button className="delete-product"><IoTrashBin /></button>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && productHoverableStyle}
  display: flex;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);
  margin: 10px 16px;
  border-radius: 5px;
  padding: 8px 16px;
  width: 318px;

  .delete-product {
    visibility: hidden;
  }

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
    }
    .quantity {
      margin-right: 16px;
    }

    .price,
    .quantity {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 15px;
      color: rgba(255, 160, 27, 1);
    }
  }
`;

const productHoverableStyle = css`
  &:hover {
    .right-side {
      position: relative;
      margin-right: 0;

      .quantity {
        visibility: hidden;
      }

      .delete-product {
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: visible;
        background: rgba(226, 85, 73, 1);
        color:white;
       
      }
    }
  }
`;
